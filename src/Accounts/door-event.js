import React, {Component} from 'react'
import {View, TouchableHighlight, Text} from 'react-native'

function ScanButton({onPress}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text>Scan Tickets</Text>
    </TouchableHighlight>
  )
}

function DoorEventSummary({event: {name}, onPressScan}) {
  return (
    <View>
      <Text>{name}</Text>
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
