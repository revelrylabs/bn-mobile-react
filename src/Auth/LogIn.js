import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, View, Text, Image, TextInput, AsyncStorage, ScrollView, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {LinearGradient} from 'expo'
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
      <View style={loginStyles.container}>

        <View>
          <Text style={[styles.headerSecondary, styles.textCenter, styles.paddingBottomJumbo]}>Welcome back!</Text>

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
          <TouchableHighlight style={loginStyles.buttonContainer} onPress={this._logInAsync}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#5491CC', '#9A68B2', '#E53D96']}
              style={loginStyles.button}
            >
                <Text style={loginStyles.buttonText}>Login to your account</Text>
            </LinearGradient>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
            <View style={styles.flexRowCenter}>
              <Text style={styles.linkTextDark}>Reset your password</Text>
              <Icon name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>
        </View>

        <View>
          <TouchableHighlight onPress={() => this.props.navigation.goBack()}>
            <View style={styles.flexRowCenter}>
              <Image
                style={loginStyles.facebookIcon}
                source={require('../../assets/icon-facebook.png')}
              />
              <Text style={loginStyles.linkTextBlue}>Login with Facebook</Text>
              <Icon style={loginStyles.arrowIconBlue} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.paddingTopSmall} onPress={() => this.props.navigation.goBack()}>
            <View style={styles.flexRowCenter}>
              <Icon style={loginStyles.phoneIcon} name="phone-iphone" />
              <Text style={styles.linkTextDark}>Login with SMS</Text>
              <Icon name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
}
