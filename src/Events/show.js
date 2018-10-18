import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ScrollView, Text, View, Image, Modal, ActivityIndicator, TouchableHighlight} from 'react-native'
import {NavigationActions, StackActions} from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import Details from './details'
import GetTickets from './tickets'
import PaymentTypes from './payments'
import Checkout from './checkout'
import ModalStyles from '../styles/shared/modalStyles'

const styles = SharedStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
const modalStyles = ModalStyles.createStyles()


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

const PaymentOptions = [
  {
    header: 'Apple Pay',
    icon: require('../../assets/icon-apple-pay.png'),
    id: 1,
  },
  {
    header: '**** **** **** 4455',
    icon: require('../../assets/icon-visa-pay.png'),
    id: 2,
    subheader: 'Karim Balaa . Expires 09/18',
  },
]

export default class EventShow extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  state = {
    favorite: false,
    currentScreen: 'details',
    selectedPaymentId: 1,
    showLoadingModal: false,
    showSuccessModal: false,
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

  selectPayment = (selectedPaymentId) => {
    this.setState({
      selectedPaymentId,
      currentScreen: 'checkout',
    })
  }

  toggleLoadingModal = ({showLoadingModal}) => {
    this.setState({showLoadingModal})
  }

  toggleSuccessModal = ({showSuccessModal}) => {
    this.setState({showSuccessModal})
  }

  async addTicket(id) {
    const {screenProps: {addPurchasedTicket}} = this.props

    return new Promise((resolve) => {
      addPurchasedTicket(id)
      resolve()
    })
  }

  /* eslint-disable-next-line complexity */
  get showScreen() {
    const {currentScreen, selectedPaymentId} = this.state

    switch (currentScreen) {
    case 'details':
      return <Details />
    case 'tickets':
      return <GetTickets changeScreen={this.changeScreen} />
    case 'checkout':
      return <Checkout changeScreen={this.changeScreen} />
    case 'payment':
      return (
        <PaymentTypes
          changeScreen={this.changeScreen}
          paymentOptions={PaymentOptions}
          selectedPaymentId={selectedPaymentId}
          selectPayment={this.selectPayment}
        />
      )
    default:
      return <Details />
    }
  }

  get getTickets() {
    const {currentScreen} = this.state

    if (currentScreen === 'details') {
      return (
        <View style={[styles.buttonContainer, eventDetailsStyles.fixedFooter]}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.changeScreen('tickets')}
          >
            <Text style={styles.buttonText}>Get Tickets</Text>
          </TouchableHighlight>
        </View>
      )
    }

    return null
  }

  get purchaseTicketButton() {
    const {currentScreen} = this.state

    if (currentScreen === 'checkout') {
      const ticketDetails = {
        ticketId: 1,
        purchaseId: 1,
      }

      return (
        <View style={[styles.buttonContainer, eventDetailsStyles.fixedFooter]}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.purchaseTicket(ticketDetails)}
          >
            <Text style={styles.buttonText}>Purchase Ticket</Text>
          </TouchableHighlight>
        </View>
      )
    }

    return null
  }

  async purchaseTicket(_purchasedTicket) {
    const {navigation: {navigate}} = this.props

    this.setState({showLoadingModal: true})

    // Simulate the purchasing ticket wait
    setTimeout(async () => {
      this.setState({
        showLoadingModal: false,
        showSuccessModal: true,
      })

      // Simulate a sucessful purchase
      setTimeout(async () => {
        this.setState({showSuccessModal: false})
        const _ticketResult = await this.addTicket(1)

        // Reset the Explore Tab Stack
        const resetAction = StackActions.reset({
          index: 0,
          key: 'Explore',
          actions: [
            NavigationActions.navigate({routeName: 'Home'}),
          ],
        })

        this.props.navigation.dispatch(resetAction)

        // Navigate to the tickets tab to see the new ticket
        navigate('MyTickets')
      }, 1000)
    }, 3000)

    // @TODO: Set a "purchasedTicket flag in unstated so we can use it on MyTickets"

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
      <View style={eventDetailsStyles.backArrowCircleContainer}>
        <Icon
          style={eventDetailsStyles.backArrow}
          name={icon}
          onPress={() => this.prevScreen}
        />
      </View>
    )
  }

  render() {
    const {showLoadingModal, showSuccessModal} = this.state

    return (
      <View style={{backgroundColor: 'white'}}>
        <LoadingScreen toggleModal={this.toggleLoadingModal} modalVisible={showLoadingModal} />
        <SuccessScreen toggleModal={this.toggleSuccessModal} modalVisible={showSuccessModal} />
        <Image
          style={eventDetailsStyles.videoBkgd}
          source={require('../../assets/video-bkgd.png')}
        />

        <ScrollView>
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
