import {Container} from 'unstated'
import Bigneon from 'bn-api-node'

const server = new Bigneon.Server({prefix: 'https://bigneon.tarilabs.com/api'});

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

  signUp = (formData) => {
    server.users.register({
      first_name: "Bob",
      last_name: "Smith",
      email: formData.email,
      password: formData.password,
      phone: "55512345"
    }).then(res => {
        console.log(res);
    }).catch(e => {
        console.error(e);
    });

    // @TODO: add currentuser in results
  }
}

export {
  AuthContainer,
}
