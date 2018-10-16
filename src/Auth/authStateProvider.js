import {Container} from 'unstated'
import Bigneon from 'bn-api-node'

const server = new Bigneon.Server({prefix: 'https://staging.bigneon.com/api'});

class AuthContainer extends Container {
  constructor(props = {}) {
    super(props);

    this.state = {
      currentUser: {},
    };
  }

  setCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  // @TODO: Implement a login that also sets AsyncStgorage user
  // logIn = () => {

  // }

  signUp = (formData, success) => {
    server.users.register({
      first_name: "Bob",
      last_name: "Smith",
      email: formData.email,
      password: formData.password,
      phone: "5551234567"
    }).then((res) => {
      console.log(res);
      success // should redirect to LogIn with a message
    }).catch((e) => {
      console.error(e);
    });
  }
}

export {
  AuthContainer,
}
