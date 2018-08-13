import { createStackNavigator, createBottomTabNavigator, BottomTabBar } from 'react-navigation'
import { Image } from 'react-native';
import EventRoutes from './Events/routes'
import TicketRoutes from './Tickets/routes'
import AccountRoutes from './Accounts/routes'

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const EventsStack = createStackNavigator({
  ...EventRoutes,
}, {
  initialRouteName: 'Home',
})

const TicketsStack =  createStackNavigator({
  ...TicketRoutes,
}, {
  initialRouteName: 'MyTickets',
})

const AccountsStack =  createStackNavigator({
  ...AccountRoutes,
}, {
  initialRouteName: 'Account',
})

const tabBarOptions = {
  tabBarOptions: {
    activeTintColor: '#FF20B1',
    inactiveTintColor: 'black',
    labelStyle: {
      fontFamily: 'tt_commons_demibold',
      fontSize: 14,
      paddingVertical: 10,
    },
    style: {
      backgroundColor: 'white',
      borderWidth: 0,
      borderTopColor: 'white',
    },
  }
}

export default createBottomTabNavigator(
  {
    Explore: {
      screen: EventsStack,
      navigationOptions: {
        tabBarIcon: <Image source={require('../assets/heart-small.png')}/>,
        showIcon: true,
      }
    },
    MyTickets: {
      screen: TicketsStack,
      navigationOptions: {
        tabBarIcon: <Image source={require('../assets/heart-small.png')}/>,
        showIcon: true,
      }
    },
    Account: {
      screen: AccountsStack,
      navigationOptions: {
        tabBarIcon: <Image source={require('../assets/heart-small.png')}/>,
        showIcon: true,
      }
    },
  },
  {tabBarOptions}
)
