import { createStackNavigator } from 'react-navigation-stack'

import AccountScreen from '../../screens/Account'
import LoginScreen from '../../screens/Account/Login'
import RegisterScreen from '../../screens/Account/Register'

import transitionScreen from './config/transitionScreen'

const AccountScreenStacks = createStackNavigator(
  {
    Account: {
      screen: AccountScreen,
      navigationOptions: () => ({
        title: 'Mi cuenta'
      })
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        title: 'Ingresa'
      })
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        title: 'Regístrate'
      })
    }
  },
  {
    initialRouteName: 'Account',
    transitionConfig: transitionScreen
  }
)

export default AccountScreenStacks
