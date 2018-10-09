import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, Button, Image, ScrollView, TouchableHighlight} from 'react-native'
import {LinearGradient} from 'expo';
import SharedStyles from '../styles/shared/sharedStyles'
import LoginStyles from '../styles/login/loginStyles'

const styles = SharedStyles.createStyles()
const loginStyles = LoginStyles.createStyles()

export default class LogIn extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <ScrollView>
        <View style={loginStyles.signupBkgdContainer}>
          <Image
            style={loginStyles.signupBkgd}
            source={require('../../assets/login-bkgd.png')}
          />

          <View style={loginStyles.section}>

            <Image
              style={loginStyles.logo}
              source={require('../../assets/big-neon-logo.png')}
            />

            <View>
              <View style={loginStyles.buttonContainer}>
                <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={loginStyles.linearGradient}>
                  <TouchableHighlight
                    underlayColor="rgba(0, 0, 0, 0)"
                    style={loginStyles.button}
                  >
                    <Text style={loginStyles.buttonText}>Get Started</Text>
                  </TouchableHighlight>
                </LinearGradient>
              </View>

              <View style={loginStyles.buttonContainer}>
                <TouchableHighlight
                  underlayColor="rgba(0, 0, 0, 0)"
                  onPress={() => this.props.navigation.navigate('LogIn')}
                  style={loginStyles.buttonSecondary}
                >
                  <Text style={loginStyles.buttonSecondaryText}>Login To Your Account</Text>
                </TouchableHighlight>
              </View>
            </View>

          </View>

        </View>
      </ScrollView>
    )
  }
}
