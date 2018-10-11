import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createStackNavigator} from 'react-navigation'
import {Subscribe} from 'unstated'
import TicketRoutes from '../Tickets/routes'
import {TicketsContainer} from '../Tickets/ticketStateProvider'

const TicketsStack = createStackNavigator({
  ...TicketRoutes,
}, {
  initialRouteName: 'MyTicketList',
  navigationOptions: {
    header: null,
  },
})

export default class ticketStackWithStore extends Component {
  static router = TicketsStack.router;
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    return <Subscribe to={[TicketsContainer]}>{(ticketStore) => <TicketsStack navigation={this.props.navigation} screenProps={{store: ticketStore}} />}</Subscribe>
  }
}
