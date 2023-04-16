import React from 'react'
import {
  View,
  FlatList,
  StyleSheet,
  TouchableHighlight,
  Text
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PokemonCard from '../components/PokemonCard'
import { ActivityIndicator } from 'react-native-paper'

const generationNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function PokemonList ({
  pokemons,
  onGenerationChange,
  selectedGeneration,
  loading,
  navigation
}) {
  return (
    <>
      <LinearGradient
        colors={['rgb(245,245,245)', 'rgb(241, 254, 237)']}
        style={styles.background}
      />
      <View style={styles.container}>
        {loading && <ActivityIndicator size={30} />}
        <FlatList
          data={pokemons}
          renderItem={({ item }) => (
            <PokemonCard
              onPress={() =>
                navigation.push('PokemonDetails', { pokemon: item, team: null })
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

        <View style={styles.generationContainer}>
          <Text style={styles.generationTitle}>GENERATION</Text>
          <View style={styles.generationSelector}>
            {generationNumbers.map(generationNumber => (
              <TouchableHighlight
                style={[
                  styles.generationNumber,
                  selectedGeneration === generationNumber && {
                    border: '1px solid white'
                  }
                ]}
                key={generationNumber}
                onPress={() => onGenerationChange(generationNumber - 1)}
              >
                <Text
                  style={[
                    styles.generationText,
                    selectedGeneration === generationNumber && {
                      color: 'white',
                      fontWeight: 'bold'
                    }
                  ]}
                >
                  {generationNumber}
                </Text>
              </TouchableHighlight>
            ))}
          </View>
        </View>
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
  },
  generationContainer: {
    backgroundColor: 'rgb(65,133,148)',
    borderRadius: 30,
    paddingVertical: 6,
    paddingHorizontal: 25,
    position: 'fixed',
    bottom: 70,
    alignItems: 'center',
    justifyContent: 'center',
    left: '5%',
    width: '90%'
  },
  generationTitle: {
    color: 'rgb(162,231,195)',
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18
  },
  generationSelector: {
    flexDirection: 'row',
    gap: 7
  },
  generationNumber: {
    alignItems: 'center',
    width: 25,
    height: 25,
    justifyContent: 'center',
    borderRadius: '100%',
    border: '1px solid rgb(162,231,195)'
  },
  generationText: {
    fontSize: 16,
    color: 'rgb(162,231,195)'
  }
})
