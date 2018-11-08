import {Container} from 'unstated'
import {AsyncStorage} from 'react-native'
import {server} from '../constants/Server'

/* eslint-disable camelcase */
class AuthContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = this.defaultState
  }

  get defaultState() {
    return {
      currentUser: {},
      access_token: null,
      refresh_tokn: null,
    }
  }

  // @TODO: Implement a login that also sets AsyncStgorage user
  logIn = async (formData, navigate) => { // eslint-disable-line space-before-function-paren
    try {

      const resp = await server.auth.authenticate(formData)
      const {data: {access_token, refresh_token}} = resp

      await AsyncStorage.setItem('userToken', access_token)
      await AsyncStorage.setItem('refreshToken', refresh_token)
      await this.getCurrentUser(navigate, access_token, refresh_token, false)
      navigate('AuthLoading')

    } catch (error) {
      console.log('Log In Error:', error); // eslint-disable-line no-console

      navigate('LogIn')
    }
  }

  logOut = async (navigate) => { // eslint-disable-line space-before-function-paren
    await AsyncStorage.clear();
    this.setState(this.defaultState, () => {
      navigate('AuthLoading')
    })
  }

  // eslint-disable-next-line complexity
  getCurrentUser = async (navigate, access_token, refresh_token, setToken = true) => { // eslint-disable-line space-before-function-paren
    if (setToken) {
      try {
        const refreshTokenResp = await server.auth.refresh({refresh_token})
        const {data} = refreshTokenResp

        access_token = data.access_token
        refresh_token = data.refresh_token

        await AsyncStorage.setItem('userToken', access_token)
        await AsyncStorage.setItem('refreshToken', refresh_token)
        await server.client.setToken(access_token)
      } catch (error) {
        console.log('TOKEN ERROR', error) // eslint-disable-line no-console
        this.logOut(navigate)
      }
    }

    try {
      const myUserResponse = await server.users.current()

      this.setState({currentUser: myUserResponse.data, access_token, refresh_token})
    } catch (error) {
      console.log('Set Current User Error', error); // eslint-disable-line no-console
      this.logOut(navigate)
    }
  }

  signUp = (formData, navigate) => {
    server.users.register({
      first_name: 'Bob',
      last_name: 'Smith',
      email: formData.email,
      password: formData.password,
      phone: '5551234567',
    }).then((res) => {
      console.log(res); // eslint-disable-line no-console
      navigate('LogIn') // should redirect to LogIn with a message
    }).catch((e) => {
      console.error(e); // eslint-disable-line no-console
    });
  }
}

export {
  AuthContainer,
}
