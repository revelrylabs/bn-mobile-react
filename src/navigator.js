import { createStackNavigator } from 'react-navigation'
import Home from './Home'

const ROUTES = {
  Home,
}

const OPTIONS = {
  initialRouteName: 'Home',
}

export default createStackNavigator(ROUTES, OPTIONS)
