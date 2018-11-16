import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import CheckoutStyles from '../styles/event_details/checkoutStyles'
import {isEmpty} from 'lodash'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const checkoutStyles = CheckoutStyles.createStyles()

// @TODO: Replace on a per-event level, I guess?
const maxAllowed = 999999

/*  eslint-disable camelcase */

export default class Checkout extends Component {
  static propTypes = {
    changeScreen: PropTypes.func,
    event: PropTypes.object,
    cart: PropTypes.object,
    selectedPaymentDetails: PropTypes.object,
  }

  constructor(props) {
    super(props)

    // const {cart: {state}} = props
    this.state = {
      quantity: 1, // @TODO: get form cart state
      selectedTicket: this.selectedTicket,
    }
  }

  get selectedTicket() {
    const {event: {ticket_types}, cart: {state: {ticketTypeId}}} = this.props

    return ticket_types.find((ticket) => ticket.id === ticketTypeId)
  }

  incrementTickets = () => {
    const {quantity} = this.state

    if (quantity >= maxAllowed) {
      return null
    }

    this.setState({quantity: quantity + 1})
    return null
  }

  get incrementStyle() {
    const {quantity} = this.state

    return quantity >= maxAllowed ? checkoutStyles.addIconDisabled : checkoutStyles.addIcon
  }

  decrementTickets = () => {
    const {quantity} = this.state

    // Dont decrement below one ticket
    if (quantity <= 1) {
      return null
    }

    // @TODO: Add a check for max tickets allowed
    this.setState({quantity: quantity - 1})
    return null
  }

  get decrementStyle() {
    const {quantity} = this.state

    return quantity <= 1 ? checkoutStyles.removeIconDisabled : checkoutStyles.removeIcon
  }

  get paymentSelected() {
    const {selectedPaymentDetails} = this.props
    const selected = !isEmpty(selectedPaymentDetails)

    if (selected) {
      return (
        <View style={styles.flexRowFlexStart}>
          <Image
            style={checkoutStyles.iconPaymentSmall}
            source={require('../../assets/icon-visa-pay.png')}
          />
          <Text style={checkoutStyles.ticketSubHeaderPink}>**** **** **** {selectedPaymentDetails.last4}</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.flexRowFlexStart}>
          <Text>Please enter your payment information</Text>
        </View>
      )
    }
  }

  render() {
    const {selectedTicket} = this.state

    return (
      <View style={[checkoutStyles.mainBody, checkoutStyles.checkoutMainBody]}>
        <View style={checkoutStyles.mainBodyContent}>

          <View style={checkoutStyles.headerWrapper}>
            <Text style={checkoutStyles.header}>Checkout</Text>
          </View>

          <View style={checkoutStyles.rowContainer}>
            <View style={checkoutStyles.row}>
              <View>
                <Text style={[checkoutStyles.ticketHeader, styles.marginBottomTiny]}>Quantity</Text>
                <Text style={checkoutStyles.ticketSubHeader}>{selectedTicket.name}</Text>
              </View>
            </View>
            <View style={checkoutStyles.row}>
              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.decrementTickets()}>
                <Icon style={this.decrementStyle} name="remove-circle" />
              </TouchableHighlight>
              <Text style={checkoutStyles.quantityPrice}>{this.state.quantity}</Text>
              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.incrementTickets()}>
                <Icon style={this.incrementStyle} name="add-circle" />
              </TouchableHighlight>
            </View>
          </View>

          <View style={checkoutStyles.rowContainer}>
            <View style={checkoutStyles.row}>
              <View>
                <Text style={[checkoutStyles.ticketHeader, styles.marginBottomTiny]}>Taylor Swift</Text>
                <Text style={checkoutStyles.ticketSubHeader}>Friday, July 20 - 8:50 pm - The Warfield</Text>
              </View>
            </View>
          </View>

          <TouchableHighlight onPress={() => this.props.changeScreen('payment')}>
            <View style={checkoutStyles.rowContainer}>
              <View style={checkoutStyles.row}>
                <View>
                  <Text style={[checkoutStyles.ticketHeader, styles.marginBottomTiny]}>Payment</Text>
                  {this.paymentSelected}
                </View>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>

          <View style={checkoutStyles.rowContainer}>
            <View style={checkoutStyles.row}>
              <View>
                <Text style={[checkoutStyles.ticketHeader, styles.marginBottomTiny]}>Sub Total</Text>
                <Text style={checkoutStyles.ticketHeader}>Fees</Text>
              </View>
            </View>
            <View style={checkoutStyles.row}>
              <View>
                <Text style={[checkoutStyles.ticketSubHeader, styles.marginBottomSmall]}>$30.00 USD</Text>
                <Text style={checkoutStyles.ticketSubHeader}>$5.00 USD</Text>
              </View>
            </View>
          </View>

          <View style={checkoutStyles.rowContainer}>
            <View style={checkoutStyles.row}>
              <View>
                <Text style={checkoutStyles.ticketHeader}>Total</Text>
              </View>
            </View>
            <View style={checkoutStyles.row}>
              <View>
                <Text style={checkoutStyles.ticketHeader}>$35.00 USD</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
