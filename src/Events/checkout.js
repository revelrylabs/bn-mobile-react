import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight} from 'react-native'

export default class Checkout extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    return (
      <View>
        <Text>Checkout</Text>
      </View>
    )
  }
}
