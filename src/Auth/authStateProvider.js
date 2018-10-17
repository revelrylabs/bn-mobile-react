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

  setCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  // @TODO: Implement a login that also sets AsyncStgorage user
  logIn = async (formData, navigate) => {
    try {
      const resp = await server.auth.authenticate(formData)
      const {data: {access_token, refresh_token}} = resp

      await AsyncStorage.setItem('userToken', access_token)
      await AsyncStorage.setItem('refreshToken', refresh_token)

      server.users.current().then((myUserResponse) => {
        this.setState({currentUser: myUserResponse.data})
      });

    } catch {
      navigate('LogIn')
    }

    navigate('AuthLoading')
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
