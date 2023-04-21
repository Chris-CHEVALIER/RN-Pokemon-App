// My pages
import PokemonTeams from './pages/PokemonTeams'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from './pages/HomeStackScreen'
import { Image, StatusBar } from 'react-native'

const Tab = createBottomTabNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
          tabBarStyle: { marginBottom: 5 }
        }}
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
