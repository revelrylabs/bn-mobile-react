import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import CheckoutStyles from '../styles/event_details/checkoutStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const checkoutStyles = CheckoutStyles.createStyles()

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
      <View style={checkoutStyles.mainBody}>
        <View style={checkoutStyles.mainBodyContent}>

          <View style={checkoutStyles.headerWrapper}>
            <Text style={checkoutStyles.header}>Checkout</Text>
          </View>

          <View style={checkoutStyles.rowContainer}>
            <View style={checkoutStyles.row}>
              <View>
                <Text style={[checkoutStyles.ticketHeader, styles.marginBottomTiny]}>Quantity</Text>
                <Text style={checkoutStyles.ticketSubHeader}>General Admission</Text>
              </View>
            </View>
            <View style={checkoutStyles.row}>
              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.decrementTickets()}>
                <Icon style={checkoutStyles.removeIcon} name="remove-circle" />
              </TouchableHighlight>
              <Text style={checkoutStyles.quantityPrice}>{this.state.quantity}</Text>
              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => this.incrementTickets()}>
                <Icon style={checkoutStyles.addIcon} name="add-circle" />
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
                  <View style={styles.flexRowFlexStart}>
                    <Image
                      style={checkoutStyles.iconPaymentSmall}
                      source={require('../../assets/icon-visa-pay.png')}
                    />
                    <Text style={checkoutStyles.ticketSubHeaderPink}>**** **** **** 4455</Text>
                  </View>
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
