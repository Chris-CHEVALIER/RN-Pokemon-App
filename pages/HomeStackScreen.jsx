import React, { useEffect, useState } from 'react'

// My pages
import PokemonDetails from './PokemonDetails'
import PokemonList from './PokemonList'

// Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TeamDetails from './TeamDetails'
import TeamForm from './TeamForm'
const Stack = createNativeStackNavigator()

// Data
const generationsQuery = [
  'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
  'https://pokeapi.co/api/v2/pokemon?limit=100&offset=151',
  'https://pokeapi.co/api/v2/pokemon?limit=135&offset=251',
  'https://pokeapi.co/api/v2/pokemon?limit=107&offset=386',
  'https://pokeapi.co/api/v2/pokemon?limit=156&offset=493',
  'https://pokeapi.co/api/v2/pokemon?limit=72&offset=649',
  'https://pokeapi.co/api/v2/pokemon?limit=81&offset=721',
  'https://pokeapi.co/api/v2/pokemon?limit=96&offset=809',
  'https://pokeapi.co/api/v2/pokemon?limit=105&offset=905'
]

export default function HomeStackScreen () {
  const [pokemons, setPokemons] = useState([])
  const [generationUrl, setGenerationUrl] = useState(generationsQuery[0])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(generationUrl).then(response => {
      response.json().then(pokemonIds => {
        const promises = pokemonIds.results.map(pokemonId =>
          fetch(pokemonId.url).then(res => res.json())
        )
        Promise.all(promises).then(pokemonDetails => {
          setPokemons(pokemonDetails)
          setLoading(false)
        })
      })
    })
  }, [generationUrl])

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='PokemonList'>
        {props => (
          <PokemonList
            {...props}
            pokemons={pokemons}
            onGenerationChange={n => setGenerationUrl(generationsQuery[n])}
            selectedGeneration={generationsQuery.indexOf(generationUrl) + 1}
            loading={loading}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name='PokemonDetails' component={PokemonDetails} />
      <Stack.Screen name='TeamDetails' component={TeamDetails} />
      <Stack.Screen name='TeamForm' component={TeamForm} />
    </Stack.Navigator>
  )
}
