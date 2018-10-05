import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import {Image} from 'react-native';
import EventRoutes from './Events/routes'
import TicketRoutes from './Tickets/routes'
import AccountRoutes from './Accounts/routes'
import NavigationStyles from './styles/shared/navigationStyles'

import {Subscribe} from 'unstated'
import {TicketsContainer} from './Tickets/ticketStateProvider'
import {EventsContainer} from './Events/eventStateProvider'

const navigationStyles = NavigationStyles.createStyles()

const EventsStack = createStackNavigator({
  ...EventRoutes,
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    header: null,
  },
})

EventsStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;

  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const TicketsStack = createStackNavigator({
  ...TicketRoutes,
}, {
  initialRouteName: 'MyTicketList',
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

class ticketStackWithStore extends Component {
  static router = TicketsStack.router;

  render() {
    return <Subscribe to={[TicketsContainer]}>{(ticketStore) => <TicketsStack navigation={this.props.navigation} screenProps={{store: ticketStore}} />}</Subscribe>
  }
}

class eventStackWithStore extends Component {
  static router = EventsStack.router;

  render() {
    return <Subscribe to={[EventsContainer]}>{(eventStore) => <EventsStack navigation={this.props.navigation} screenProps={{store: eventStore}} />}</Subscribe>
  }
}

/* eslint-disable react/display-name, react/prop-types */
export default createBottomTabNavigator(
  {
    Explore: {
      screen: eventStackWithStore,
      navigationOptions: ({_navigation}) => ({
        tabBarIcon: ({focused}) => {
          const imageName = focused ? require('../assets/icon-explore-active.png') : require('../assets/icon-explore.png')

          return <Image style={navigationStyles.tabBarIconExplore} source={imageName} />
        },
        showIcon: true,
      }),
    },
    MyTickets: {
      screen: ticketStackWithStore,
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
