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

          <TouchableHighlight>
            <View style={eventTicketStyles.rowContainer}>
              <View style={eventTicketStyles.row}>
                <View>
                  <Text style={[eventTicketStyles.ticketHeader, styles.marginBottomTiny]}>Quantity</Text>
                  <Text style={eventTicketStyles.ticketSubHeader}>General Admission</Text>
                </View>
              </View>
              <View style={eventTicketStyles.row}>
                <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
                <Text style={eventTicketStyles.ticketPrice}>1</Text>
                <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
              </View>
            </View>
          </TouchableHighlight>

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
