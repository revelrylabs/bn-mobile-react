import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {ScrollView, Text, View, Image, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import EventDetailsStyles from '../styles/event_details/eventDetailsStyles'
import Details from './details'
import GetTickets from './tickets'
import PaymentTypes from './payments'
import Checkout from './checkout'

const styles = SharedStyles.createStyles()
const eventDetailsStyles = EventDetailsStyles.createStyles()
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
    } else {
      return null
    }
  }

  get purchaseTicket() {
    const {currentScreen} = this.state

    if (currentScreen === 'checkout') {
      return (
        <View style={[styles.buttonContainer, eventDetailsStyles.fixedFooter]}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.changeScreen('confirm')}
          >
            <Text style={styles.buttonText}>Purchase Ticket</Text>
          </TouchableHighlight>
        </View>
      )
    } else {
      return null
    }
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
      <Icon
        style={eventDetailsStyles.backArrow}
        name={icon}
        onPress={() => this.prevScreen}
      />
    )
  }

  render() {
    const {favorite} = this.state

    return (
      <View style={{backgroundColor: 'white'}}>
        <View style={[eventDetailsStyles.videoContainer, eventDetailsStyles.videoHeaderContainer]}>
          <Image
            style={eventDetailsStyles.videoBkgd}
            source={require('../../assets/video-bkgd.png')}
          />
        </View>

        <ScrollView>
          {this.showScreen}
        </ScrollView>

        <View style={eventDetailsStyles.videoHeaderContainer}>

          <View style={eventDetailsStyles.backArrowWrapper}>
            {this.backArrow}
          </View>

          <View style={eventDetailsStyles.videoActionsWrapper}>
            <View style={styles.flexColumnFlexStart}>
              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.toggleFavorite(!favorite)}>
                <View style={favorite ? styles.iconLinkCircleContainerActive : styles.iconLinkCircleContainer}>
                  <Icon style={favorite ? styles.iconLinkCircleActive : styles.iconLinkCircle} name="star" />
                </View>
              </TouchableHighlight>
              <View style={[styles.iconLinkCircleContainer, styles.marginTopSmall]}>
                <Icon style={styles.iconLinkCircle} name="reply" />
              </View>
            </View>
          </View>

        </View>



        {this.getTickets}
      </View>
    )
  }
}
