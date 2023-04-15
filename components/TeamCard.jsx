import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'

export default function TeamCard ({ team, onPress }) {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const promises = team.pokemons.map(pokemonUrl =>
      fetch(pokemonUrl).then(res => res.json())
    )
    Promise.all(promises).then(pokemonDetails => {
      setPokemons(pokemonDetails)
    })
  }, [])

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.centered}>
        {pokemons.length > 0 && (
          <Image
            style={styles.sprite}
            source={{
              uri: pokemons[0].sprites.other['official-artwork'].front_default
            }}
          />
        )}

        <Text style={styles.teamName}>{team.name}</Text>
        <View style={styles.container}>
          <Text style={styles.trainerName}>{team.trainer}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  centered: {
    position: 'relative',
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row'
  },
  teamName: {
    fontSize: 28,
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  sprite: {
    width: 220,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 10
  },
  trainerName: {
    backgroundColor: 'rgb(65,133,148)',
    borderRadius: 25,
    width: 120,
    marginTop: 10,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgb(162,231,195)'
  }
})
