// My pages
import PokemonTeams from './pages/PokemonTeams'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from './pages/HomeStackScreen'
import { Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          tabBarStyle: { marginBottom: 5 }
        }}
        /* tabBarOptions={{
          activeTintColor: 'rgb(65,133,148)'
        }} */
      >
        <Tab.Screen
          name='Home'
          component={HomeStackScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/pokemon-icon.png')}
                style={{ width: 30, height: 30 }}
              />
            ),
            tabBarLabel: 'Pokémons'
          }}
        />
        <Tab.Screen
          name='PokemonTeams'
          component={PokemonTeams}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/team-icon.png')}
                style={{ width: 30, height: 30 }}
              />
            ),
            tabBarLabel: 'Équipes'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
