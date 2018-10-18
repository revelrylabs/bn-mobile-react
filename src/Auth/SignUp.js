import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Text, TextInput, TouchableHighlight} from 'react-native'
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

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  signUp = async () => {
    const {screenProps: {auth}, navigation: {navigate}} = this.props
    const {email, password} = this.state

    await auth.signUp({email, password}, navigate)
  }

  render() {
    return (
      <View style={loginStyles.container}>

        <View>
          <Text style={[styles.headerSecondary, styles.textCenter, styles.paddingBottomJumbo]}>
            Create your account
          </Text>
          <TextInput
            style={formStyles.input}
            placeholder="Email Address"
            onChangeText={(email) => this.setState({email})}
          />
          <TextInput
            style={formStyles.input}
            secureTextEntry
            placeholder="Password"
            onChangeText={(password) => this.setState({password})}
          />
          <TouchableHighlight style={loginStyles.buttonContainer} onPress={this.signUp}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#5491CC', '#9A68B2', '#E53D96']}
              style={loginStyles.button}
            >
              <Text style={loginStyles.buttonText}>Let's Do This</Text>
            </LinearGradient>
          </TouchableHighlight>
        </View>

        <View>
          <Text style={[loginStyles.mutedText, styles.textCenter]}>By signing up you agree to our</Text>
          <TouchableHighlight>
            <Text style={[loginStyles.mutedText, styles.textCenter, styles.textUnderline]}>Terms of Service &amp; Privacy Policy.</Text>
          </TouchableHighlight>
        </View>

      </View>
    )
  }
}
