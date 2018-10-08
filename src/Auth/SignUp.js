import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Button, TouchableHighlight} from 'react-native'
import SharedStyles from '../styles/shared/sharedStyles'

const styles = SharedStyles.createStyles()

export default class LogIn extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <Text>
          Sign Up
        </Text>
        <Button title="I have an account already" onPress={() => this.props.navigation.navigate('LogIn')} />
      </View>
    )
  }
}
