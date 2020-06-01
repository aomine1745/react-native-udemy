import { createStackNavigator } from 'react-navigation-stack'

import RestaurantsScreen from 'screens/Restaurants'
import AddRestaurantScreen from 'screens/Restaurants/AddRestaurant'

const RestaurantsScreenStacks = createStackNavigator(
  {
    Restaurants: {
      screen: RestaurantsScreen,
      navigationOptions: () => ({
        title: 'Busca tu restaurante'
      })
    },
    AddRestaurant: {
      screen: AddRestaurantScreen,
      navigationOptions: () => ({
        title: 'Añade un Restaurante'
      })
    }
  },
  {
    initialRouteName: 'Restaurants'
  }
)

export default RestaurantsScreenStacks
