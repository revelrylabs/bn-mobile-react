import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, View, Text, AsyncStorage} from 'react-native'
import SharedStyles from '../styles/shared/sharedStyles'
import LoginStyles from '../styles/login/loginStyles'

const styles = SharedStyles.createStyles()
const loginStyles = LoginStyles.createStyles()

export default class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = {
    title: 'Please log in',
  };

  _logInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.headerSmaller, styles.textCenter]}>Welcome back!</Text>
        <Button title="Log in!" onPress={this._logInAsync} />
        <Button title="I need an account" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}
