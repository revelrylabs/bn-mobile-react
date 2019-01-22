import React, {Component} from 'react'
import {View, Text} from 'react-native'

function Guest({email}) {
  return (
    <View>
      <Text>{email}</Text>
    </View>
  )
}

export default class ManualCheckin extends Component {
  render() {
    const {isFetchingGuests, guests} = this.props

    return (
      <View style={{flex: 1}}>
        {isFetchingGuests && (
          <Text>Hang on a sec...</Text>
        ) || guests.map(guest => (
          <Guest {...guest} key={guest.id} />
        ))}
      </View>
    )
  }
}
