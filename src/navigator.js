import { createStackNavigator, createBottomTabNavigator, BottomTabBar } from 'react-navigation'
import EventRoutes from './Events/routes'
import TicketRoutes from './Tickets/routes'
import AccountRoutes from './Accounts/routes'

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


export default createBottomTabNavigator(
  {
    Explore: EventsStack,
    MyTickets: TicketsStack,
    Account: AccountsStack,
  }
)
