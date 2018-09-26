import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Image, TouchableHighlight, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import EventTicketStyles from '../styles/event_details/eventTicketStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const eventTicketStyles = EventTicketStyles.createStyles()

export default class PaymentTypes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    return (
      <ScrollView>

        <View style={styles.container}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.header}>Payment Options</Text>
          </View>
        </View>

        <TouchableHighlight>
          <View style={eventTicketStyles.rowContainer}>
            <View style={eventTicketStyles.row}>
              <Image
                style={eventTicketStyles.iconPayment}
                source={require('../../assets/icon-apple-pay.png')}
              />
              <Text style={eventTicketStyles.ticketHeader}>Apply Pay</Text>
            </View>
            <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={eventTicketStyles.rowContainer}>
            <View style={eventTicketStyles.row}>
              <Image
                style={eventTicketStyles.iconPayment}
                source={require('../../assets/icon-visa-pay.png')}
              />
              <View>
                <Text style={eventTicketStyles.ticketHeader}>**** **** **** 4455</Text>
                <Text style={eventTicketStyles.ticketSubHeader}>Karim Balaa . Expires 09/18</Text>
              </View>
            </View>
            <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
          </View>
        </TouchableHighlight>

        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={eventTicketStyles.buttonRounded}
          >
            <Text style={styles.buttonText}>Get Tickets</Text>
          </TouchableHighlight>
        </View>

      </ScrollView>
    )
  }
}
