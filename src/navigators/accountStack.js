import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createStackNavigator} from 'react-navigation'
import {Subscribe} from 'unstated'
import {AuthContainer} from '../Auth/authStateProvider'
import AccountRoutes from '../Accounts/routes'

const AccountsStack = createStackNavigator({
  ...AccountRoutes,
}, {
  initialRouteName: 'Account',
})

export default class accountsStackWithStore extends Component {
  static router = AccountsStack.router;
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Subscribe to={[AuthContainer]}>
        {(auth) => (
          <AccountsStack
            navigation={this.props.navigation}
            screenProps={{auth}}
          />
        )}
      </Subscribe>
    )
  }
}