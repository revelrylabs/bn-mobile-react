import {Container} from 'unstated'
import {AsyncStorage} from 'react-native'
import Bigneon from 'bn-api-node'

const server = new Bigneon.Server({prefix: 'https://staging.bigneon.com/api'});

class AuthContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      currentUser: {},
      access_token: null,
      refresh_tokn: null,
    };
  }

  // @TODO: Implement a login that also sets AsyncStgorage user
  logIn = async (formData, navigate) => {
    try {

      const resp = await server.auth.authenticate(formData)
      const {data: {access_token, refresh_token}} = resp

      await AsyncStorage.setItem('userToken', access_token)
      await AsyncStorage.setItem('refreshToken', refresh_token)
      await this.getCurrentUser(access_token, refresh_token, false)
      navigate('AuthLoading')

    } catch(error) {
      console.log("Log In Error:", error);

      navigate('LogIn')
    }
  }

  // logOut = async() => {
  //   // clear asyncstorage and state
  // }

  getCurrentUser = async (access_token, refresh_token, setToken = true) => {
    if (setToken) {
      await server.client.setToken(access_token)
      await server.auth.refresh({refresh_token})
    }

    try {
      const myUserResponse = await server.users.current()

      this.setState({currentUser: myUserResponse.data, access_token, refresh_token})
    } catch(error) {
      console.log("Set Current User Error", error);
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
      console.log(res);
      navigate('LogIn') // should redirect to LogIn with a message
    }).catch((e) => {
      console.error(e);
    });
  }
}

export {
  AuthContainer,
}
