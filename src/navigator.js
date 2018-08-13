import React from 'react';
import { createStackNavigator, createBottomTabNavigator, BottomTabBar } from 'react-navigation'
import { Image } from 'react-native';
import EventRoutes from './Events/routes'
import TicketRoutes from './Tickets/routes'
import AccountRoutes from './Accounts/routes'
import NavigationStyles from './styles/shared/navigationStyles'

const navigationStyles = NavigationStyles.createStyles()

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


const navigationOptions = {
  header: {
    style: {
      backgroundColor: 'white',
      borderBottomColor: 'white',
    },
  }
}

const tabBarOptions = {
  tabBarOptions: {
    activeTintColor: '#FF20B1',
    inactiveTintColor: 'black',
    labelStyle: {
      fontFamily: 'tt_commons_demibold',
      fontSize: 14,
    },
    style: {
      backgroundColor: 'white',
      borderWidth: 0,
      borderTopColor: 'white',
      height: 50,
      marginVertical: 4,
    },
  }
}

export default createBottomTabNavigator(
  {
    Explore: {
      screen: EventsStack,
      navigationOptions: {
        tabBarIcon: <Image style={navigationStyles.tabBarIconExplore} source={require('../assets/icon-explore.png')}/>,
        showIcon: true,
      }
    },
    MyTickets: {
      screen: TicketsStack,
      navigationOptions: {
        tabBarIcon: <Image style={navigationStyles.tabBarIconTicket} source={require('../assets/icon-ticket.png')}/>,
        showIcon: true,
      }
    },
    Account: {
      screen: AccountsStack,
      navigationOptions: {
        tabBarIcon: <Image style={navigationStyles.tabBarIconAccount} source={require('../assets/icon-account.png')}/>,
        showIcon: true,
      }
    },
  },
  tabBarOptions: {
  }
)
