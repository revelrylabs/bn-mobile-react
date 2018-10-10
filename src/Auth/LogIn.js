import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, View, Text, TextInput, AsyncStorage, ScrollView, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'
import LoginStyles from '../styles/login/loginStyles'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const loginStyles = LoginStyles.createStyles()



export default class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = {
    title: 'null',
  };

  _logInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <ScrollView>
        <View style={loginStyles.container}>
          <Text style={[styles.headerSmaller, styles.textCenter]}>Welcome back!</Text>

          <TextInput
            style={formStyles.input}
            placeholder="Email Address"
            searchIcon={{size: 24}}
            disabled
          />
          <TextInput
            style={formStyles.input}
            placeholder="Password"
            searchIcon={{size: 24}}
            disabled
          />

          <Button title="Log in!" onPress={this._logInAsync} />
          <Button title="I need an account" onPress={() => this.props.navigation.goBack()} />
        </View>
      </ScrollView>
    )
  }
}
