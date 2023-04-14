import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// My pages
import PokemonList from './pages/PokemonList'
import PokemonDetails from './pages/PokemonDetails';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer initialRouteName="PokemonList">
      <Stack.Navigator>
        <Stack.Screen name='PokemonList' component={PokemonList} />
        <Stack.Screen name='PokemonDetails' component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
