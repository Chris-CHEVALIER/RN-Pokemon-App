import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native'
import { Card } from '@rneui/base'

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
    <>
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

          <Text style={styles.trainerName}>{team.trainer}</Text>

          <Text style={styles.teamName}>{team.name}</Text>
        </View>
      </TouchableHighlight>
      <Card.Divider />
    </>
  )
}

const styles = StyleSheet.create({
  centered: {
    position: 'relative',
    alignItems: 'center',
    margin: 10
  },
  sprite: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: '100%',
    zIndex: -1,
    border: '7px solid rgb(162,231,195)'
  },
  trainerName: {
    backgroundColor: 'rgb(65,133,148)',
    borderRadius: 25,
    width: 120,
    marginTop: -30,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgb(162,231,195)'
  },
  teamName: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold'
  }
})
