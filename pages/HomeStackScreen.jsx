import React, { useEffect, useState } from 'react'

// My pages
import PokemonDetails from './PokemonDetails'
import PokemonList from './PokemonList'

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TeamDetails from './TeamDetails'
const Stack = createNativeStackNavigator()

// Data
const pokePath = 'https://pokeapi.co/api/v2/'
const pokeQuery = 'pokemon?limit=151&offset=0'
const firstGenPokemonPath = `${pokePath}${pokeQuery}`

export default function HomeStackScreen () {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch(firstGenPokemonPath).then(response => {
      response.json().then(pokemonIds => {
        const promises = pokemonIds.results.map(pokemonId =>
          fetch(pokemonId.url).then(res => res.json())
        )
        Promise.all(promises).then(pokemonDetails => {
          setPokemons(pokemonDetails)
        })
      })
    })
  }, [])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='PokemonList'>
        {props => <PokemonList {...props} pokemons={pokemons} />}
      </Stack.Screen>
      <Stack.Screen name='PokemonDetails' component={PokemonDetails} />
      <Stack.Screen name='TeamDetails' component={TeamDetails} />
    </Stack.Navigator>
  )
}
