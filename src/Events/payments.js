import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight, ScrollView} from 'react-native'
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

      </ScrollView>
    )
  }
}
