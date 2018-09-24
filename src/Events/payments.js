import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight} from 'react-native'

export default class PaymentTypes extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    return (
      <View>
        <Text>Payment Types</Text>
      </View>
    )
  }
}
