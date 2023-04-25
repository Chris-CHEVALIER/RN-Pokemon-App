import React, { useEffect, useState } from 'react'

// Core components
import { View, FlatList, StyleSheet } from 'react-native'

// My components
import LightGradient from '../components/LightGradient'
import GenerationSelector from '../components/GenerationSelector'
import PokemonCard from '../components/PokemonCard'
import LoadingIndicator from '../components/LoadingIndicator'

import { theme } from '../styles/theme'

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

export default function PokemonList ({ navigation }) {
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
    <>
      <LightGradient />
      <View style={styles.container}>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <FlatList
            data={pokemons}
            renderItem={({ item }) => (
              <PokemonCard
                onPress={() =>
                  navigation.push('PokemonDetails', {
                    pokemon: item,
                    team: null
                  })
                }
                pokemonDetails={item}
              />
            )}
            keyExtractor={item => item.id}
            numColumns={3}
            style={styles.pokemonContainer}
            columnWrapperStyle={styles.listWrapper}
            contentContainerStyle={styles.pokemonList}
          />
        )}
      </View>
      <GenerationSelector
        onGenerationChange={n => setGenerationUrl(generationsQuery[n])}
        selectedGeneration={generationsQuery.indexOf(generationUrl) + 1}
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 8,
    borderColor: theme.secondary
  },
  listWrapper: {
    marginVertical: 10,
    justifyContent: 'space-around'
  }
})
