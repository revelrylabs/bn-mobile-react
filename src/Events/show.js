import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ScrollView, Text, View, Image, Modal, ActivityIndicator, TouchableHighlight} from 'react-native'
import {NavigationActions, StackActions, NavigationEvents} from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import Details from './details'
import GetTickets from './tickets'
import PaymentTypes from './payments'
import Checkout from './checkout'
import ModalStyles from '../styles/shared/modalStyles'
import {toDollars} from '../constants/money'
import {flatMap, min, max, isEmpty, some} from 'lodash'

const styles = SharedStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
const modalStyles = ModalStyles.createStyles()

/* eslint-disable camelcase, space-before-function-paren */
function priceRange(ticket_types) {
  const ticket_pricing = flatMap(ticket_types, (ticket) => (
    ticket.ticket_pricing ? ticket.ticket_pricing.price_in_cents : false
  ))

  return ticket_pricing ? [
    toDollars(min(ticket_pricing)),
    toDollars(max(ticket_pricing)),
  ] : ticket_pricing
}


const LoadingScreen = ({toggleModal, modalVisible}) => (
  <Modal
    onRequestClose={() => {
      toggleModal(!modalVisible)
    }}
    visible={modalVisible}
    transparent
  >
    <View style={modalStyles.modalContainer}>
      <View style={styles.flexRowCenter}>
        <View style={modalStyles.activityIndicator}>
          <ActivityIndicator size="large" color="#FF20B1" />
        </View>
      </View>
    </View>
  </Modal>
)

LoadingScreen.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
}

const SuccessScreen = ({toggleModal, modalVisible}) => (
  <Modal
    onRequestClose={() => {
      toggleModal(!modalVisible)
    }}
    visible={modalVisible}
    transparent
  >
    <View style={modalStyles.modalContainer}>
      <View style={styles.flexRowCenter}>
        <View style={modalStyles.activityIndicator}>
          <Image
            style={modalStyles.emojiActivityIndicator}
            source={require('../../assets/emoji-loader.png')}
          />
        </View>
      </View>
    </View>
  </Modal>
)

SuccessScreen.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
}

export default class EventShow extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    screenProps: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      event: false,
      eventId: props.navigation.getParam('eventId', false),
      favorite: false,
      currentScreen: 'details',
      showLoadingModal: false,
      showSuccessModal: false,
    }

    this.loadEvent()
  }

  componentWillReceiveProps(newProps) {
    const {screenProps: {store: {state: {selectedEvent}}}} = newProps

    // Do we want to check if the event id different, or just always update?
    if (selectedEvent) {
      this.setState({event: selectedEvent})
    }
  }

  clearEvent() {
    const {screenProps: {store}} = this.props

    store.clearEvent()
  }

  async loadEvent() {
    const {screenProps: {store}} = this.props
    const {eventId} = this.state

    if (eventId) {
      store.getEvent(eventId)
    }
  }

  scrollToTop = () => {
    this.refComponent.scrollToOffset({offset: 0, animated: true});
  }

  toggleFavorite = (favorite) => {

    this.setState({favorite})
  }

  changeScreen = (currentScreen) => {
    this.setState({currentScreen})
  }

  selectPayment = async (selectedPaymentDetails) => {
    const {screenProps: {cart}} = this.props

    await cart.setPayment(selectedPaymentDetails)
    this.changeScreen('checkout')
  }

  toggleLoadingModal = ({showLoadingModal}) => {
    this.setState({showLoadingModal})
  }

  toggleSuccessModal = ({showSuccessModal}) => {
    this.setState({showSuccessModal})
  }

  // If no ticket types, or no ticket pricings, we cant buy tickets
  get canBuyTickets() {
    const {event: {ticket_types}} = this.state

    return some(ticket_types, (ticket) => !isEmpty(ticket.ticket_pricing))
  }

  get ticketRange() { // eslint-disable-line complexity
    const {event: {ticket_types}} = this.state

    const ticketPriceRange = []
    const [lowest, highest] = priceRange(ticket_types)

    if (lowest) {
      ticketPriceRange.push(`$${lowest}`)
    }

    if (highest && highest !== lowest) {
      ticketPriceRange.push(`$${highest}`)
    }

    return (
      <View style={eventDetailsStyles.priceHeaderWrapper}>
        <Text style={eventDetailsStyles.priceHeader}>
          {ticketPriceRange.join(' - ')}
        </Text>
      </View>
    )
  }

  onTicketSelection = async (ticketTypeId, ticketPricingId) => {
    const {screenProps: {cart}} = this.props

    await cart.emptyCart()
    await cart.selectTicket(ticketTypeId, ticketPricingId)
    this.changeScreen('checkout')
  }

  /* eslint-disable-next-line complexity */
  get showScreen() {
    const {event, currentScreen} = this.state
    const {screenProps: {cart: {state: {selectedPaymentDetails}}, user: {access_token, refresh_token}}} = this.props

    if (!event || isEmpty(event)) {
      return null
    }

    // @TODO: Add a ScrollTo initial position

    switch (currentScreen) {
    case 'details':
      return <Details event={event} />
    case 'tickets':
      return <GetTickets event={event} onTicketSelection={this.onTicketSelection} changeScreen={this.changeScreen} />
    case 'checkout':
      return (
        <Checkout
          cart={this.props.screenProps.cart}
          event={event}
          changeScreen={this.changeScreen}
        />
      )
    case 'payment':
      return (
        <PaymentTypes
          changeScreen={this.changeScreen}
          selectedPaymentDetails={selectedPaymentDetails}
          selectPayment={this.selectPayment}
          access_token={access_token}
          refresh_token={refresh_token}
        />
      )
    default:
      return <Details />
    }
  }

  get getDetailPageButtonCta() {
    const {event,currentScreen} = this.state
    switch(event.override_status){
      case 'PurchaseTickets':
        return {ctaText: 'Purchase Tickets', enabled: true}
      case 'SoldOut':
        return {ctaText: 'Sold Out', enabled: true}
      case 'OnSaleSoon':
        return {ctaText: 'On Sale Soon', enabled: true}
      case 'TicketsAtTheDoor':
        return {ctaText: 'Tickets At The Door', enabled: true}
      case 'UseAccessCode':
        return {ctaText: 'Use Access Code', enabled: true}
      case 'Free':
        return {ctaText: 'Free', enabled: true}
      case 'Rescheduled':
        return {ctaText: 'Rescheduled', enabled: false}
      case 'Cancelled':
        return {ctaText: 'Cancelled', enabled: false}
      case 'OffSale':
        return {ctaText: 'Off-Sale', enabled: false}
      case 'Ended':
        return {ctaText: 'Sale Ended', enabled: false}
      default:
        return {ctaText: 'Purchase Tickets', enabled: true}
    }
  }

  get getTickets() {
    const {event,currentScreen} = this.state
    const {ctaText, enabled} = this.getDetailPageButtonCta
    if (currentScreen === 'details' && this.canBuyTickets) {
      return (
        <View style={eventDetailsStyles.fixedFooter}>
          {enabled ? this.ticketRange : null}
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              style={enabled ? styles.button : styles.buttonDisabled}
              onPress={enabled ? () => this.changeScreen('tickets') : null}
            >
              <Text style={styles.buttonText}>{ctaText}</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    }

    return null
  }

  get purchaseTicketButton() {
    const {currentScreen} = this.state
    
    if (currentScreen === 'checkout') {
      return (
        <View style={[styles.buttonContainer, eventDetailsStyles.fixedFooter]}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.purchaseTicket}
          >
            <Text style={styles.buttonText}>Purchase Ticket</Text>
          </TouchableHighlight>
        </View>
      )
    }

    return null
  }

  purchaseTicket = async () => {
    const {screenProps: {cart, addPurchasedTicket}, navigation: {navigate}} = this.props

    if (isEmpty(cart.state.selectedPaymentDetails)) {
      alert('Please enter your payment details');
      return false
    }


    this.setState({showLoadingModal: true})

    await cart.placeOrder(() => addPurchasedTicket(cart.state.ticketTypeId))

    await this.setState({
      showLoadingModal: false,
      showSuccessModal: true,
    })

    const resetAction = StackActions.reset({
      index: 0,
      key: 'Explore',
      actions: [
        NavigationActions.navigate({routeName: 'Home'}),
      ],
    })

    setTimeout(() => {
      this.props.navigation.dispatch(resetAction)

      // Navigate to the tickets tab to see the new ticket
      navigate('MyTickets')
    }, 3000)

  }


  /* eslint-disable-next-line complexity */
  get prevScreen() {
    const {navigation} = this.props
    const {currentScreen} = this.state

    switch (currentScreen) {
    case 'details':
      return navigation.goBack()
    case 'tickets':
      return this.changeScreen('details')
    case 'checkout':
      return this.changeScreen('tickets')
    case 'payment':
      return this.changeScreen('checkout')
    default:
      return navigation.goBack()
    }
  }

  get backArrow() {
    const {currentScreen} = this.state
    const icon = currentScreen === 'details' ? 'close' : 'arrow-back'

    return (
      <TouchableHighlight style={eventDetailsStyles.linkContainer} underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.prevScreen}>
        <View style={eventDetailsStyles.backArrowCircleContainer}>
          <Icon
            style={eventDetailsStyles.backArrow}
            name={icon}
          />
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const {event, showLoadingModal, showSuccessModal} = this.state

    if (!event) {
      return null
    }

    return (
      <View style={{backgroundColor: 'white'}}>
        <NavigationEvents
          onWillFocus={() => this.loadEvent()}
          onDidBlur={() => this.clearEvent()}
        />
        <LoadingScreen toggleModal={this.toggleLoadingModal} modalVisible={showLoadingModal} />
        <SuccessScreen toggleModal={this.toggleSuccessModal} modalVisible={showSuccessModal} />
        <Image
          style={eventDetailsStyles.videoBkgd}
          source={{uri: event.promo_image_url}}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          {this.showScreen}
        </ScrollView>

        <View style={eventDetailsStyles.backArrowWrapper}>
          {this.backArrow}
        </View>

        {this.getTickets}
        {this.purchaseTicketButton}
      </View>
    )
  }
}
