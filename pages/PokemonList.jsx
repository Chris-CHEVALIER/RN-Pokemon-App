import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PokemonCard from '../components/PokemonCard'

const pokePath = 'https://pokeapi.co/api/v2/'
const pokeQuery = 'pokemon?limit=151&offset=0'
const firstGenPokemonPath = `${pokePath}${pokeQuery}`

export default function PokemonList ({ navigation }) {
  const [firstGenPokemons, setFirstGenPokemons] = useState([])

  useEffect(() => {
    fetch(firstGenPokemonPath).then(response => {
      response.json().then(pokemonIds => {
        const promises = pokemonIds.results.map(pokemonId =>
          fetch(pokemonId.url).then(res => res.json())
        )
        Promise.all(promises).then(pokemonDetails => {
          setFirstGenPokemons(pokemonDetails)
        })
      })
    })
  }, [])

  return (
    <>
      <LinearGradient
        colors={['rgb(245,245,245)', 'rgb(241, 254, 237)']}
        style={styles.background}
      />
      <View style={styles.container}>
        <Text style={styles.title}>POKÉDEX</Text>

        <FlatList
          data={firstGenPokemons}
          renderItem={({ item }) => (
            <PokemonCard
              onPress={() =>
                navigation.push('PokemonDetails', { pokemon: item })
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
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    border: '8px solid rgb(183, 233, 166)'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100vh'
  },
  title: {
    border: '1px dashed blacked',
    margin: 30,
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    backgroundColor: 'rgb(202, 45, 54)',
    borderRadius: 25,
    color: 'white',
    padding: 15
  },
  listWrapper: {
    marginVertical: 10,
    justifyContent: 'space-around'
  }
})
