import {
  View,
  Text,
  Image,
  ImageBackground,
  ToastAndroid,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { getStyleType, typeImages } from '../pokemonUtils'
import PokemonTeams from './PokemonTeams'
import { Modal } from 'react-native-paper'
import { getTeams, updateTeam } from '../Fire'
import { useEffect } from 'react'
import TeamCard from '../components/TeamCard'

export default function PokemonDetails ({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false)
  const { pokemon, team } = route.params
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`

  const [teams, setTeams] = useState([])

  useEffect(() => {
    getTeams(teams => {
      setTeams(teams)
    })
  }, [])

  function addPokemonToTeam (team) {
    if (
      team.pokemons.length < 6 &&
      !team.pokemons.find(p => p === pokemonUrl)
    ) {
      team.pokemons.push(pokemonUrl)
      updateTeam(team)
      ToastAndroid.show(
        `${pokemon.name} a été ajouté à l'équipe "${team.name}".`,
        ToastAndroid.SHORT
      )
    } else {
      ToastAndroid.show(
        `${pokemon.name} ne peut pas être ajouté à l'équipe "${team.name}".`,
        ToastAndroid.SHORT
      )
    }
  }

  function removePokemonfromTeam () {
    let pokemonToRemove = team.pokemons.find(p => p === pokemonUrl)
    if (pokemonToRemove) {
      const pokemonIndex = team.pokemons.indexOf(pokemonToRemove)
      if (pokemonIndex >= 0) {
        team.pokemons.splice(pokemonIndex, 1)
      }
      updateTeam(team)
      ToastAndroid.show(
        `${pokemon.name} a été retiré de l'équipe "${team.name}".`,
        ToastAndroid.SHORT
      )
    } else {
      ToastAndroid.show(
        `${pokemon.name} ne peut pas être retiré de l'équipe "${team.name}".`,
        ToastAndroid.SHORT
      )
    }
  }

  return (
    <ImageBackground
      source={typeImages[pokemon.types[0].type.name]}
      resizeMode='cover'
      style={styles.image}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.addButtonContainer, styles.backButtonContainer]}
      >
        <View style={styles.addButton}>
          <Text style={styles.plusIcon}>{'<'}</Text>
        </View>
      </TouchableOpacity>
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

        <TouchableOpacity
          onPress={() =>
            team && team.pokemons.find(p => p === pokemonUrl)
              ? removePokemonfromTeam()
              : setModalVisible(true)
          }
          style={styles.addButtonContainer}
        >
          <View style={styles.addButton}>
            <Text style={styles.plusIcon}>
              {team && team.pokemons.find(p => p === pokemonUrl) ? '-' : '+'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        onDismiss={() => setModalVisible(!modalVisible)}
        contentContainerStyle={styles.modal}
      >
        <>
          <FlatList
            data={teams}
            renderItem={({ item }) => (
              <TeamCard
                onPress={() => {
                  onPress
                    ? addPokemonToTeam(item)
                    : navigation.navigate('TeamDetails', { team: item })
                }}
                team={item}
              />
            )}
            keyExtractor={item => item.id}
          />
        </>
      </Modal>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 25
  },
  sprite: {
    width: 220,
    height: 200,
    zIndex: 1,
    marginTop: 10
  },
  informationsContainer: {
    backgroundColor: 'white',
    width: '96%',
    margin: 'auto',
    height: Dimensions.get('window').height - 180,
    marginTop: -20,
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
  container: {
    flexDirection: 'row'
  },
  typeIcon: {
    paddingVertical: 3,
    textAlign: 'center',
    width: 53,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 2,
    color: '#fff',
    fontSize: 10,
    textTransform: 'uppercase',
    backgroundColor: '#ccc',
    margin: 5
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 110,
    backgroundColor: 'rgb(65,133,148)',
    borderRadius: 100,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButton: {
    alignItems: 'center',
    width: 35,
    height: 35,
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgb(162,231,195)'
  },
  plusIcon: {
    fontSize: 25,
    marginBottom: 4,
    color: 'rgb(162,231,195)'
  },
  backButtonContainer: {
    top: 30,
    left: 15
  },
  modal: {
    backgroundColor: 'white',
    padding: 20
  }
})
