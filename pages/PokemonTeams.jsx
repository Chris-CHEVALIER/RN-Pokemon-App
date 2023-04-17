import {
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  View,
  Text
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getTeams } from '../Fire'
import TeamCard from '../components/TeamCard'
import { LinearGradient } from 'expo-linear-gradient'

export default function PokemonTeams ({ navigation, onPress }) {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    getTeams(teams => {
      setTeams(teams)
    })
  }, [])

  return (
    <ScrollView>
      <LinearGradient
        colors={['rgb(245,245,245)', 'rgb(241, 254, 237)']}
        style={styles.background}
      />
      <FlatList
        data={teams}
        renderItem={({ item }) => (
          <TeamCard
            onPress={() => {
              onPress
                ? onPress(item)
                : navigation.navigate('TeamDetails', { team: item })
            }}
            team={item}
          />
        )}
        keyExtractor={item => item.id}
      />
      <View style={{ alignItems: 'center' }}>
        <TouchableHighlight
          onPress={() => {}}
          style={styles.addButtonContainer}
        >
          <View style={styles.addButton}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        </TouchableHighlight>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
 /*  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100vh'
  }, */
  addButtonContainer: {
    /* position: 'fixed', */
    bottom: 30,
    backgroundColor: 'rgb(65,133,148)',
    /* borderRadius: '100%', */
    width: 45,
    height: 45,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButton: {
    alignItems: 'center',
    width: 35,
    height: 35,
    justifyContent: 'center',
    /* borderRadius: '100%', */
    border: '1px solid rgb(162,231,195)'
  },
  plusIcon: {
    fontSize: 25,
    marginBottom: 4,
    color: 'rgb(162,231,195)'
  }
})
