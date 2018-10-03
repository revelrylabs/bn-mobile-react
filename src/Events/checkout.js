import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import EventTicketStyles from '../styles/event_details/eventTicketStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const eventTicketStyles = EventTicketStyles.createStyles()

export default class Checkout extends Component {
  static propTypes = {
    changeScreen: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this. state = {
      quantity: 1,
    }
  }

  incrementTickets = () => {
    const {quantity} = this.state

    // @TODO: Add a check for max tickets allowed
    this.setState({quantity: quantity + 1})
  }

  decrementTickets = () => {
    const {quantity} = this.state

    // Dont decrement below one ticket
    if (quantity <= 1) { return null }

    // @TODO: Add a check for max tickets allowed
    this.setState({quantity: quantity - 1})
  }

  render() {
    return (
      <View style={eventTicketStyles.mainBody}>
        <View style={eventTicketStyles.mainBodyContent}>

          <View style={styles.container}>
            <Text style={eventTicketStyles.header}>Checkout</Text>
          </View>

          <View style={eventTicketStyles.rowContainer}>
            <View style={eventTicketStyles.row}>
              <View>
                <Text style={[eventTicketStyles.ticketHeader, styles.marginBottomTiny]}>Quantity</Text>
                <Text style={eventTicketStyles.ticketSubHeader}>General Admission</Text>
              </View>
            </View>
            <View style={eventTicketStyles.row}>
              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.decrementTickets()}>
                <Icon style={eventTicketStyles.removeIcon} name="remove-circle" />
              </TouchableHighlight>
              <Text style={eventTicketStyles.quantityPrice}>{this.state.quantity}</Text>
              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.incrementTickets()}>
                <Icon style={eventTicketStyles.addIcon} name="add-circle" />
              </TouchableHighlight>
            </View>
          </View>

          <View style={eventTicketStyles.rowContainer}>
            <View style={eventTicketStyles.row}>
              <View>
                <Text style={[eventTicketStyles.ticketHeader, styles.marginBottomTiny]}>Taylor Swift</Text>
                <Text style={eventTicketStyles.ticketSubHeader}>Friday, July 20 - 8:50 pm - The Warfield</Text>
              </View>
            </View>
          </View>

          <TouchableHighlight onPress={() => this.props.changeScreen('payment')}>
            <View style={eventTicketStyles.rowContainer}>
              <View style={eventTicketStyles.row}>
                <View>
                  <Text style={[eventTicketStyles.ticketHeader, styles.marginBottomTiny]}>Payment</Text>
                  <View style={styles.flexRowFlexStart}>
                    <Image
                      style={eventTicketStyles.iconPaymentSmall}
                      source={require('../../assets/icon-visa-pay.png')}
                    />
                    <Text style={eventTicketStyles.ticketSubHeaderPink}>**** **** **** 4455</Text>
                  </View>
                </View>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>

          <View style={eventTicketStyles.rowContainer}>
            <View style={eventTicketStyles.row}>
              <View>
                <Text style={[eventTicketStyles.ticketHeader, styles.marginBottomTiny]}>Sub Total</Text>
                <Text style={eventTicketStyles.ticketHeader}>Fees</Text>
              </View>
            </View>
            <View style={eventTicketStyles.row}>
              <View>
                <Text style={[eventTicketStyles.ticketSubHeader, styles.marginBottomSmall]}>$30.00 USD</Text>
                <Text style={eventTicketStyles.ticketSubHeader}>$5.00 USD</Text>
              </View>
            </View>
          </View>

          <View style={eventTicketStyles.rowContainer}>
            <View style={eventTicketStyles.row}>
              <View>
                <Text style={eventTicketStyles.ticketHeader}>Total</Text>
              </View>
            </View>
            <View style={eventTicketStyles.row}>
              <View>
                <Text style={eventTicketStyles.ticketHeader}>$35.00 USD</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
