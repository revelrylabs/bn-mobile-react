import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Account from './index'
import AccountDetails from './account'
import Notifications from './notifications'
import Billing from './billing'
import OrderHistory from './orderHistory'
import SignedOut from './signedOut'
import ChangePhoto from './changePhoto'
import Icon from 'react-native-vector-icons/MaterialIcons'
import NavigationStyles from '../styles/shared/navigationStyles'

const navigationStyles = NavigationStyles.createStyles()

const ROUTES = {
  Account: {
    screen: Account,
    navigationOptions: {
      header: null,
    },
  },
  AccountDetails: {
    screen: AccountDetails,
    navigationOptions: ({navigation}) => ({
      title: 'Account',
      headerLeft: (
        <TouchableHighlight onPress={() => navigation.navigate('Account')}>
          <View style={navigationStyles.headerLeftWrapper}>
            <Icon style={navigationStyles.backButton} name="keyboard-arrow-left" />
            <Text style={navigationStyles.headerLeftTitle}>Settings</Text>
          </View>
        </TouchableHighlight>
      ),
      headerStyle: navigationStyles.navigationContainer,
      headerTitleStyle: navigationStyles.headerTitle,
      headerBackTitleStyle: navigationStyles.headerBackTitle,
    }),
  },
  ChangePhoto: {
    screen: ChangePhoto,
    navigationOptions: {
      title: 'Change Photo',
    },
  },
  SignedOut: {
    screen: SignedOut,
    navigationOptions: {
      title: 'Signed Out',
    },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notifications',
    },
  },
  Billing: {
    screen: Billing,
    navigationOptions: {
      title: 'Billing',
    },
  },
  OrderHistory: {
    screen: OrderHistory,
    navigationOptions: {
      title: 'Order History',
    },
  },
}

export default ROUTES
