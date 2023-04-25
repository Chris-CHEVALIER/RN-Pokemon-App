// Core components
import { Image, StatusBar, StyleSheet } from 'react-native'

// Pages
import HomeStackScreen from './pages/HomeStackScreen'
import TeamList from './pages/TeamList'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()

// Color theme
import { theme } from './styles/theme'

export default function App () {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: styles.tabLabel,
          tabBarActiveTintColor: theme.primary,
          tabBarInactiveTintColor: theme.text
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeStackScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/pokemon-icon.png')}
                style={styles.tabIcon}
              />
            ),
            tabBarLabel: 'Pokémons'
          }}
        />
        <Tab.Screen
          name='TeamList'
          component={TeamList}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/team-icon.png')}
                style={styles.tabIcon}
              />
            ),
            tabBarLabel: 'Équipes'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  tabIcon: {
    width: 30,
    height: 30
  }
})
