import React, { useEffect, useState } from 'react'

// My pages
import PokemonDetails from './PokemonDetails'
import PokemonList from './PokemonList'

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TeamDetails from './TeamDetails'
import TeamForm from './TeamForm'
const Stack = createNativeStackNavigator()

export default function HomeStackScreen () {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='PokemonList' component={PokemonList} />
      <Stack.Screen name='PokemonDetails' component={PokemonDetails} />
      <Stack.Screen name='TeamDetails' component={TeamDetails} />
      <Stack.Screen name='TeamForm' component={TeamForm} />
    </Stack.Navigator>
  )
}
