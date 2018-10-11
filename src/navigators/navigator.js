import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
import AppStack from './appNavigator'
import LogInScreen from '../Auth/LogIn'
import SignUpScreen from '../Auth/SignUp'
import AuthLoadingScreen from '../Auth/AuthLoadingScreen'
import IndexScreen from '../Auth/index'

const AuthStack = createStackNavigator(
  {
    AuthRoot: IndexScreen,
    SignUp: SignUpScreen,
    LogIn: LogInScreen,
  },
  {
    initialRouteName: 'AuthRoot',
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