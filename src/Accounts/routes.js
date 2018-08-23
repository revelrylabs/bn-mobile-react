import Account from './index'
import AccountDetails from './account'
import Notifications from './notifications'
import Billing from './billing'
import OrderHistory from './orderHistory'

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
      title: 'My Account',
    }
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      title: 'Notification Preferences',
    }
  },
  Billing: {
    screen: Billing,
    navigationOptions: {
      title: 'Billing Information',
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