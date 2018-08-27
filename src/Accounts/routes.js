import React from 'react';
import Account from './index'
import AccountDetails from './account'
import Notifications from './notifications'
import Billing from './billing'
import OrderHistory from './orderHistory'
import Icon from 'react-native-vector-icons/MaterialIcons'
import NavigationStyles from '../styles/shared/navigationStyles'

const navigationStyles = NavigationStyles.createStyles()

const ROUTES = {
  Account: {
    screen: Account,
    navigationOptions: {
      header: null,
    }
  },
  AccountDetails: {
    screen: AccountDetails,
    navigationOptions: {
      title: 'Account',
      headerBackTitle: 'Settings',
      headerLeft: <Icon style={navigationStyles.backButton} name="keyboard-arrow-left" />,
      headerStyle: navigationStyles.navigationContainer,
      headerTitleStyle: navigationStyles.headerTitle,
      headerBackTitleStyle: navigationStyles.headerBackTitle,
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notifications',
    }
  },
  Billing: {
    screen: Billing,
    navigationOptions: {
      title: 'Billing',
    }
  },
  OrderHistory: {
    screen: OrderHistory,
    navigationOptions: {
      title: 'Order History',
    }
  },
}

export default ROUTES
