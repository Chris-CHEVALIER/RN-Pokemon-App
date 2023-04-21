import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { getStyleType } from '../pokemonUtils'

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
    <TouchableOpacity style={styles.teamCard} onPress={onPress}>
      <View style={styles.inline}>
        <View style={{ width: '75%', marginLeft: 25 }}>
          <Text
            style={[
              styles.teamName,
              pokemons.length > 0
                ? {
                    color: getStyleType(pokemons[0].types[0].type.name)
                      .backgroundColor
                  }
                : {}
            ]}
          >
            {team.name}
          </Text>
          <Text style={styles.trainerName}>{team.trainer}</Text>
        </View>
        {pokemons.length > 0 && (
          <Image
            style={styles.sprite}
            source={{
              uri: pokemons[0].sprites.other['official-artwork'].front_default
            }}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  teamCard: {
    backgroundColor: 'white',
    boxShadow: 'rgba(17, 12, 46, 0.15) 0px 6px 10px 0px',
    marginVertical: 10,
    borderRadius: 10
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sprite: {
    width: '45%',
    right: '70%',
    height: 90,
    resizeMode: 'cover'
  },
  teamName: {
    fontSize: 22,
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
  trainerName: {
    fontSize: 14,
    textTransform: 'capitalize'
  }
})
