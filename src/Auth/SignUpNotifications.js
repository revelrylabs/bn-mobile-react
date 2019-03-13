import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {LinearGradient} from 'expo'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'
import LoginStyles from '../styles/login/loginStyles'
import EventScannerStyles from '../styles/account/eventScannerStyles'
import BusyButton from '../BusyButton'
import {registerPushTokenIfPermitted} from '../notifications'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const loginStyles = LoginStyles.createStyles()
const eventScannerStyles = EventScannerStyles.createStyles()

/* eslint-disable camelcase,space-before-function-paren */

const returnToButton = (navigation) => (
  <TouchableHighlight
    onPress={() => navigation.goBack()}
    underlayColor="rgba(0, 0, 0, 0)"
  >
    <Icon style={loginStyles.backButton} name="arrow-back" />
  </TouchableHighlight>
)

export default class SignUpNotifications extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: returnToButton(navigation),
      headerStyle: loginStyles.navigationContainer,
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      isBusy: false,
    }
  }

  setupNotifications = async () => {
    const {
      navigation: {navigate},
    } = this.props

    this.setState({isBusy: true})
    await registerPushTokenIfPermitted()

    navigate('AuthLoading')
  }

  skipNotificationsSetup = async () => {
    const {
      navigation: {navigate},
    } = this.props

    this.setState({isBusy: true})
    navigate('AuthLoading')
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={loginStyles.container}
        behavior="padding"
        enabled
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}
        >
          <View>
            <BusyButton
              style={loginStyles.buttonContainer}
              onPress={this.setupNotifications}
              isBusy={this.state.isBusy}
              busyContent={
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#5491CC', '#9A68B2', '#E53D96']}
                  style={loginStyles.button}
                >
                  <ActivityIndicator color="#FFF" />
                </LinearGradient>
              }
            >
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#5491CC', '#9A68B2', '#E53D96']}
                style={loginStyles.button}
              >
                <Text style={loginStyles.buttonText}>
                  {'Turn notifications ON'}
                </Text>
              </LinearGradient>
            </BusyButton>

            <TouchableHighlight
              onPress={this.skipNotificationsSetup}
              underlayColor="rgba(0, 0, 0, 0)"
            >
              <Text>{"Nah, hopefully I'll figure it out"}</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}