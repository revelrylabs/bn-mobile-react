import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight} from 'react-native'

export default class GetTickets extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    return (
      <View>
        <Text>Tickets</Text>
      </View>
    )
  }
}
