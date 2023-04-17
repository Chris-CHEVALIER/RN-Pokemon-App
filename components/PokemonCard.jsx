import React from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import { getStyleType } from '../pokemonUtils'

export default function PokemonCard ({ pokemonDetails, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.centered}>
        <Image
          style={styles.sprite}
          source={{
            uri: pokemonDetails.sprites.other['official-artwork'].front_default
          }}
        />
        <Text style={styles.pokemonName}>{pokemonDetails.name}</Text>
        <View style={styles.container}>
          {pokemonDetails.types.map((type, i) => (
            <Text
              key={i}
              style={[styles.typeIcon, getStyleType(type.type.name)]}
            >
              {type.type.name}
            </Text>
          ))}
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  centered: {
    /* position: 'relative', */
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row'
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  sprite: {
    width: 80,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10
  },
  typeIcon: {
    /* fontFamily: 'Fira Sans, sans-serif', */
    paddingVertical: 3,
    textAlign: 'center',
    textShadow: '1px 1px 1px #333',
    width: 43,
    border: '1px solid #aaa',
    /* borderRadius: 2, */
    color: '#fff',
    fontSize: 8,
    textTransform: 'uppercase',
    backgroundColor: '#ccc',
    backgroundImage: 'linear-gradient(#ddd, #bbb)',
    margin: 5
  }
})
