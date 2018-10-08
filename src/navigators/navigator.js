import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
import AppStack from './appNavigator'
import LogInScreen from '../Auth/LogIn'
import SignUpScreen from '../Auth/SignUp'
import AuthLoadingScreen from '../Auth/AuthLoadingScreen'

const AuthStack = createStackNavigator(
  {
    SignUp: SignUpScreen,
    LogIn: LogInScreen,
  },
  {
    initialRouteName: 'SignUp',
  }
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);