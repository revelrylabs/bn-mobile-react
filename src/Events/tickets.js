import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import CheckoutStyles from '../styles/event_details/checkoutStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const checkoutStyles = CheckoutStyles.createStyles()

export default class GetTickets extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    console.log("PROPSSSSS", this.props);
    
    return (
      <View style={checkoutStyles.mainBody}>
        <View style={checkoutStyles.mainBodyContent}>

          <View style={checkoutStyles.headerWrapper}>
            <Text style={checkoutStyles.header}>Ticket Type</Text>
          </View>

          <TouchableHighlight onPress={() => this.props.changeScreen('checkout')}>
            <View style={checkoutStyles.rowContainer}>
              <View style={checkoutStyles.row}>
                <Text style={checkoutStyles.ticketPrice}>$35</Text>
                <View>
                  <Text style={checkoutStyles.ticketHeader}>General Admission</Text>
                  <Text style={checkoutStyles.ticketSubHeader}>Lorem ipsum dolor sit amet non lorem.</Text>
                </View>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.changeScreen('checkout')}>
            <View style={checkoutStyles.rowContainer}>
              <View style={checkoutStyles.row}>
                <Text style={checkoutStyles.ticketPrice}>$55</Text>
                <View>
                  <Text style={checkoutStyles.ticketHeader}>VIP</Text>
                  <Text style={checkoutStyles.ticketSubHeader}>Lorem ipsum dolor sit amet non lorem.</Text>
                </View>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
