import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import { LinearGradient } from 'expo-linear-gradient'
import { getStyleType } from '../pokemonUtils'

export default function TeamDetails ({ navigation, route }) {
  const { team } = route.params
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const promises = team.pokemons.map(pokemonUrl =>
      fetch(pokemonUrl).then(res => res.json())
    )
    Promise.all(promises).then(pokemonDetails => {
      setPokemons(pokemonDetails)
      setLoading(false)
    })
  }, [team])

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <LinearGradient
            colors={['rgb(245,245,245)', 'rgb(241, 254, 237)']}
            style={styles.background}
          />
          <View>
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
          </View>
          <FlatList
            data={pokemons}
            renderItem={({ item }) => (
              <PokemonCard
                onPress={() =>
                  navigation.push('PokemonDetails', {
                    pokemon: item,
                    team: team
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
          <View>
            <Text style={styles.trainerName}>{team.trainer}</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PokemonTeams')}
              style={styles.closeButtonContainer}
            >
              <View style={styles.closeButton}>
                <Text style={styles.crossIcon}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 25
  },
  container: {
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height
  },
  listWrapper: {
    marginVertical: 10,
    justifyContent: 'space-around'
  },
  teamName: {
    fontSize: 26,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  trainerName: {
    backgroundColor: 'rgb(65,133,148)',
    borderRadius: 25,
    width: 120,
    margin: 'auto',
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgb(162,231,195)'
  },
  closeButtonContainer: {
    backgroundColor: 'rgb(65,133,148)',
    borderRadius: 100,
    width: 45,
    height: 45,
    margin: 'auto',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 220,
    margin: 'auto'
  },
  closeButton: {
    alignItems: 'center',
    width: 35,
    height: 35,
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgb(162,231,195)'
  },
  crossIcon: {
    fontSize: 25,
    marginBottom: 4,
    color: 'rgb(162,231,195)'
  }
})
