import React, {Component} from 'react';
import {PropTypes} from 'prop-types'
import {Text, View} from 'react-native';
export default class TransferTickets extends Component {

  render() {

    return (
      <View>
        <Text>Welcome to the Ticket Xfer Page</Text>
      </View>
    )
  }
}

TransferTickets.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
}
