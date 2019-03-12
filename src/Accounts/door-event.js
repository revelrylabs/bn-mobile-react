import React, {Component} from 'react'
import {View, TouchableHighlight, Text} from 'react-native'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import EventManagerStyles from '../styles/account/eventManagerStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const eventManagerStyles = EventManagerStyles.createStyles()

function ScanButton({onPress}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight style={styles.buttonSecondary} onPress={onPress}>
        <Text style={styles.buttonSecondaryText}>Scan Tickets</Text>
      </TouchableHighlight>
    </View>
  )
}

function DoorEventSummary({event: {name}, onPressScan}) {
  return (
    <View style={styles.container}>
      <Text style={[styles.headerSecondary, styles.textCenter]}>{name}</Text>
      <ScanButton onPress={onPressScan} />
    </View>
  )
}

export default class DoorEvent extends Component {
  get event() {
    return this.props.navigation.getParam('event')
  }

  chooseEvent = async () => {
    await this.props.screenProps.eventManager.scanForEvent(this.event)
    this.props.navigation.navigate('EventScanner')
  }

  render() {
    return (
      <DoorEventSummary event={this.event} onPressScan={this.chooseEvent} />
    )
  }
}
