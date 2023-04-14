import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { getStyleType } from '../pokemonUtils'

const background = require('../assets/pokemon-bg.jpg')

export default function PokemonDetails ({ route }) {
  const { pokemon } = route.params
  console.log(pokemon)
  return (
    <ImageBackground
      source={background}
      resizeMode='cover'
      style={styles.image}
    >
      <Image
        style={styles.sprite}
        source={{
          uri: pokemon.sprites.other['official-artwork'].front_default
        }}
      />

      <View style={styles.informationsContainer}>
        <Text style={styles.pokemonName}>{pokemon.name}</Text>
        <View style={styles.container}>
          {pokemon.types.map((type, i) => (
            <Text
              key={i}
              style={[styles.typeIcon, getStyleType(type.type.name)]}
            >
              {type.type.name}
            </Text>
          ))}
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center'
  },
  sprite: {
    width: 220,
    height: 200,
    marginTop: 10
  },
  informationsContainer: {
    backgroundColor: 'white',
    width: '96%',
    margin: 'auto',
    height: 600,
    marginTop: -20,
    zIndex: -1,
    paddingTop: 20,
    borderRadius: 20,
    alignItems: 'center'
  },
  pokemonName: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'rgb(61, 61, 61)'
  },
  typeIcon: {
    fontFamily: 'Fira Sans, sans-serif',
    paddingVertical: 3,
    textAlign: 'center',
    textShadow: '1px 1px 1px #333',
    width: 53,
    border: '1px solid #aaa',
    borderRadius: 2,
    color: '#fff',
    fontSize: 10,
    textTransform: 'uppercase',
    backgroundColor: '#ccc',
    backgroundImage: 'linear-gradient(#ddd, #bbb)',
    margin: 5
  }
})
