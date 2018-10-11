import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createStackNavigator} from 'react-navigation'
import EventRoutes from '../Events/routes'
import {Subscribe} from 'unstated'
import {EventsContainer} from '../Events/eventStateProvider'
import {TicketsContainer} from '../Tickets/ticketStateProvider'

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

export default class eventStackWithStore extends Component {
  static router = EventsStack.router;
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Subscribe to={[EventsContainer, TicketsContainer]}>
        {(eventStore, ticketStore) => (
          <EventsStack
            navigation={this.props.navigation}
            screenProps={{store: eventStore, addPurchasedTicket: ticketStore.setPurchasedTicket}}
          />
        )}
      </Subscribe>)
  }
}
