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
  navigationOptions: {
    header: null
  },
})

const TicketsStack =  createStackNavigator({
  ...TicketRoutes,
}, {
  initialRouteName: 'MyTickets',
  navigationOptions: {
    header: null
  },
})

const AccountsStack =  createStackNavigator({
  ...AccountRoutes,
}, {
  initialRouteName: 'Account',
  // navigationOptions: {
  //   header: null
  // },
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
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused}) => {
          const imageName = focused ? require('../assets/icon-explore-active.png') : require('../assets/icon-explore.png')

          return <Image style={navigationStyles.tabBarIconExplore} source={imageName}/>
        },
        showIcon: true,
      })
    },
    MyTickets: {
      screen: TicketsStack,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          const imageName = focused ? require('../assets/icon-ticket-active.png') : require('../assets/icon-ticket.png')

          return <Image style={navigationStyles.tabBarIconTicket} source={imageName}/>
        },
        showIcon: true,
      }
    },
    Account: {
      screen: AccountsStack,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          const imageName = focused ? require('../assets/icon-account-active.png') : require('../assets/icon-account.png')

          return <Image style={navigationStyles.tabBarIconAccount} source={imageName}/>
        },
        showIcon: true,
      }
    },
  },
  tabBarOptions: {},
)
