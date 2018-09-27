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
    navigation: PropTypes.object,
  }

  render() {
    return (
      <View style={[styles.container, eventTicketStyles.mainBody]}>
        <View style={eventTicketStyles.mainBodyContent}>

          <View style={styles.container}>
            <View style={styles.sectionHeaderContainer}>
              <Text style={styles.header}>Checkout</Text>
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
