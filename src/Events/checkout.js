import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import CheckoutStyles from '../styles/event_details/checkoutStyles'
import {DateTime} from 'luxon'
import {isEmpty, includes} from 'lodash'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const checkoutStyles = CheckoutStyles.createStyles()

/*  eslint-disable camelcase */

export default class Checkout extends Component {
  static propTypes = {
    changeScreen: PropTypes.func,
    event: PropTypes.object,
    cart: PropTypes.object,
  }

  constructor(props) {
    super(props)

    // const {cart: {state}} = props
    this.state = {
      selectedTicket: this.selectedTicket,
    }
  }

  get selectedTicket() {
    const {event: {ticket_types}, cart: {state: {ticketTypeId}}} = this.props

    return ticket_types.find((ticket) => ticket.id === ticketTypeId)
  }

  get allowIncrement() {
    const {cart: {state: {quantity}}} = this.props
    const {selectedTicket: {increment, limit_per_person}} = this.state

    if (!limit_per_person) {
      return true
    }

    return quantity + increment <= limit_per_person
  }

  incrementTickets = () => {
    const {cart: {updateQuantity, state: {quantity}}} = this.props
    const {selectedTicket: {increment}} = this.state

    if (this.allowIncrement) {
      this.setState({quantity: quantity + increment}, () => {
        updateQuantity(this.state.quantity)
      })
    }

    return null
  }

  get incrementStyle() {
    return this.allowIncrement ? checkoutStyles.addIcon : checkoutStyles.addIconDisabled
  }

  get allowDecrement() {
    const {cart: {state: {quantity}}} = this.props
    const {selectedTicket: {increment}} = this.state

    return quantity - increment >= 0
  }

  decrementTickets = () => {
    const {cart: {updateQuantity, state: {quantity}}} = this.props
    const {selectedTicket: {increment}} = this.state

    if (this.allowDecrement) {
      this.setState({quantity: quantity - increment}, () => {
        updateQuantity(this.state.quantity)
      })
    }

    return null
  }

  get decrementStyle() {
    return this.allowDecrement ? checkoutStyles.removeIcon : checkoutStyles.removeIconDisabled
  }

  get paymentSelected() {
    const {cart: {state: {selectedPaymentDetails}}} = this.props
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

  get ticketsTotal() {
    const {cart: {state: {items}}} = this.props

    if (!items) {
      return 0;
    }

    let tickets = 0;

    items.forEach((item) => {
      const {item_type, quantity, unit_price_in_cents} = item

      if (item_type === 'Tickets') {
        tickets = tickets + unit_price_in_cents * quantity;
      }
    });

    return tickets / 100;
  }

  get subtotal() {
    const {cart: {state: {total_in_cents}}} = this.props

    return total_in_cents / 100
  }

  get fees() {
    const {cart: {state: {items}}} = this.props

    if (!items) {
      return 0;
    }

    let fees = 0;

    items.forEach((item) => {
      const {item_type, quantity, unit_price_in_cents} = item

      if (includes(item_type, 'Fee')) {
        fees = fees + unit_price_in_cents * quantity;
      }
    });

    return fees / 100;
  }

  render() {
    const {selectedTicket} = this.state
    const {event, cart: {state: {quantity}}} = this.props
    const doorTime = DateTime.fromISO(event.door_time)

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
              <Text style={checkoutStyles.quantityPrice}>{quantity}</Text>
              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.incrementTickets()}>
                <Icon style={this.incrementStyle} name="add-circle" />
              </TouchableHighlight>
            </View>
          </View>

          <View style={checkoutStyles.rowContainer}>
            <View style={checkoutStyles.row}>
              <View>
                <Text style={[checkoutStyles.ticketHeader, styles.marginBottomTiny]}>{event.name}</Text>
                <Text style={checkoutStyles.ticketSubHeader}>{doorTime.toFormat('cccc LLLL d')} - {doorTime.toFormat('h:mm a')} - {event.venue.name}</Text>
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
                <Text style={[checkoutStyles.ticketSubHeader, styles.marginBottomSmall]}>${this.ticketsTotal} USD</Text>
                <Text style={checkoutStyles.ticketSubHeader}>${this.fees} USD</Text>
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
                <Text style={checkoutStyles.ticketHeader}>${this.subtotal} USD</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    )
  }
}
