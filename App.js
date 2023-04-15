// My pages
import PokemonTeams from './pages/PokemonTeams'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from './pages/HomeStackScreen'

const Tab = createBottomTabNavigator()

export default function App () {
  

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStackScreen} />

        <Tab.Screen name='PokemonTeams' component={PokemonTeams} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
