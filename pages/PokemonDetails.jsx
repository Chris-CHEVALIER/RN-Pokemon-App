import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableHighlight,
  ToastAndroid
} from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { getStyleType } from '../pokemonUtils'
import PokemonTeams from './PokemonTeams'
import { Modal } from 'react-native-paper'
import { updateTeam } from '../Fire'

const background = require('../assets/pokemon-bg.jpg')

export default function PokemonDetails ({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false)
  const { pokemon, team } = route.params
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`

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

  function removePokemonFromTeam () {
    /* let pokemonToRemove = team.pokemons.find(p => p === pokemonUrl)
    ) {
      team.pokemons.push(pokemonUrl)
      updateTeam(team)
      ToastAndroid.show(
        `${pokemon.name} a été retiré de l'équipe "${team.name}".`,
        ToastAndroid.SHORT
      )
    } else {
      ToastAndroid.show(
        `${pokemon.name} ne peut pas être ajouté à l'équipe "${team.name}".`,
        ToastAndroid.SHORT
      )
    } */
  }

  return (
    <ImageBackground
      source={background}
      resizeMode='cover'
      style={styles.image}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        style={[styles.addButtonContainer, styles.backButtonContainer]}
      >
        <View style={styles.addButton}>
          <Text style={styles.plusIcon}>{'<'}</Text>
        </View>
      </TouchableHighlight>
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

        <TouchableHighlight
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
        </TouchableHighlight>
      </View>

      <Modal
        visible={modalVisible}
        onDismiss={() => setModalVisible(!modalVisible)}
        contentContainerStyle={styles.modal}
      >
        <PokemonTeams onPress={team => addPokemonToTeam(team)} />
      </Modal>
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
  },
  addButtonContainer: {
    position: 'fixed',
    bottom: 70,
    backgroundColor: 'rgb(65,133,148)',
    borderRadius: '100%',
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
    borderRadius: '100%',
    border: '1px solid rgb(162,231,195)'
  },
  plusIcon: {
    fontSize: 25,
    marginBottom: 4,
    color: 'rgb(162,231,195)'
  },
  backButtonContainer: {
    top: 10,
    left: 10
  },
  modal: {
    backgroundColor: 'white',
    padding: 20
  }
})
