import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, View, AsyncStorage} from 'react-native'
import SharedStyles from '../styles/shared/sharedStyles'

const styles = SharedStyles.createStyles()

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
        <Button title="Log in!" onPress={this._logInAsync} />
        <Button title="I need an account" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}
