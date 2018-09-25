import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight, ScrollView} from 'react-native'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import EventTicketStyles from '../styles/shared/eventTicketStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const eventTicketStyles = EventTicketStyles.createStyles()

export default class GetTickets extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.header}>Ticket Type</Text>
          </View>

          <TouchableHighlight>
            <View style={eventTicketStyles.rowContainer}>
              <View style={eventTicketStyles.row}>
                <Icon style={eventTicketStyles.ticketIcon} name="account-circle" />
                <Text style={eventTicketStyles.ticketHeader}>Account</Text>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>

        </View>
      </ScrollView>
    )
  }
}
