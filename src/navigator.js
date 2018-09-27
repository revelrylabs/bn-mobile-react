import React from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {Image} from 'react-native';
import EventRoutes from './Events/routes'
import TicketRoutes from './Tickets/routes'
import AccountRoutes from './Accounts/routes'
import NavigationStyles from './styles/shared/navigationStyles'

const navigationStyles = NavigationStyles.createStyles()

const createStackModalNavigator = (routeConfigs, navigatorConfig, navigationOptions = false) => {
  const CardStackNavigator = createStackNavigator(routeConfigs, navigatorConfig);
  const modalRouteConfig = {};
  const routeNames = Object.keys(routeConfigs);

  for (let i = 0; i < routeNames.length; i++) {
    modalRouteConfig[`${routeNames[i]}Modal`] = routeConfigs[routeNames[i]];
  }

  const ModalStackNavigator = createStackNavigator({
    CardStackNavigator: {screen: CardStackNavigator},
    ...modalRouteConfig,
  }, {
    mode: 'modal',
    headerMode: 'none',
  });

  console.log(navigationOptions);


  if (navigationOptions) {
    ModalStackNavigator.navigationOptions = navigationOptions
  }

  return ModalStackNavigator;
};

const eventNavigationOptions = ({navigation}) => {
  let tabBarVisible = true;

  // Use .routes[0] becauser the ModalStackNavigator embeds event routes indside a second route object
  // remove .routes[0] if switching back to a normal stackNavigator
  if (navigation.state.routes[0].index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const EventsStack = createStackModalNavigator({
  ...EventRoutes,
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    header: null,
  },
}, eventNavigationOptions)

const TicketsStack = createStackNavigator({
  ...TicketRoutes,
}, {
  initialRouteName: 'MyTickets',
  navigationOptions: {
    header: null,
  },
})

const AccountsStack = createStackNavigator({
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
    },
    style: {
      backgroundColor: 'white',
      borderWidth: 0,
      borderTopColor: '#DCDCDC',
      height: 50,
      paddingVertical: 3,
    },
  },
}

/* eslint-disable react/display-name, react/prop-types */
export default createBottomTabNavigator(
  {
    Explore: {
      screen: EventsStack,
      navigationOptions: ({_navigation}) => ({
        tabBarIcon: ({focused}) => {
          const imageName = focused ? require('../assets/icon-explore-active.png') : require('../assets/icon-explore.png')

          return <Image style={navigationStyles.tabBarIconExplore} source={imageName} />
        },
        showIcon: true,
      }),
    },
    MyTickets: {
      screen: TicketsStack,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          const imageName = focused ? require('../assets/icon-ticket-active.png') : require('../assets/icon-ticket.png')

          return <Image style={navigationStyles.tabBarIconTicket} source={imageName} />
        },
        showIcon: true,
      },
    },
    Account: {
      screen: AccountsStack,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          const imageName = focused ? require('../assets/icon-account-active.png') : require('../assets/icon-account.png')

          return <Image style={navigationStyles.tabBarIconAccount} source={imageName} />
        },
        showIcon: true,
      },
    },
  },
  tabBarOptions: {},
)
