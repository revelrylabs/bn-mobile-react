import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight} from 'react-native'
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
              <Icon style={eventTicketStyles.removeIcon} name="remove-circle" />
              <Text style={eventTicketStyles.quantityPrice}>1</Text>
              <Icon style={eventTicketStyles.addIcon} name="add-circle" />
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
                <Text style={eventTicketStyles.ticketPrice}>Change Payment Type</Text>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
