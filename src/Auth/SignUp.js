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

const returnToButton = (navigation) => (
  <TouchableHighlight onPress={() => navigation.goBack()} underlayColor="rgba(0, 0, 0, 0)">
    <Icon style={loginStyles.backButton} name="arrow-back" />
  </TouchableHighlight>
)

export default class SignUp extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: returnToButton(navigation),
      headerStyle: loginStyles.navigationContainer,
    }
  };

  render() {
    return (
      <View style={loginStyles.container}>

        <View>
          <Text style={[styles.headerSecondary, styles.textCenter, styles.paddingBottomJumbo]}>
            Sign Up!
          </Text>
        </View>

      </View>
    )
  }
}
