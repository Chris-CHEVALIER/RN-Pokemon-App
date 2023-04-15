import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PokemonCard from '../components/PokemonCard'

export default function PokemonList ({ pokemons, navigation }) {
  return (
    <>
      <LinearGradient
        colors={['rgb(245,245,245)', 'rgb(241, 254, 237)']}
        style={styles.background}
      />
      <View style={styles.container}>
        <FlatList
          data={pokemons}
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
  listWrapper: {
    marginVertical: 10,
    justifyContent: 'space-around'
  }
})
