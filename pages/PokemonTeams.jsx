import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getTeams } from '../Fire'
import TeamCard from '../components/TeamCard'
import { LinearGradient } from 'expo-linear-gradient'

export default function PokemonTeams ({ navigation, onPress, onClose }) {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTeams(teams => {
      setTeams(teams)
      setLoading(false)
    })
  }, [])

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgb(245,245,245)', 'rgb(241, 254, 237)']}
        style={styles.background}
      />
      {loading ? (
        <ActivityIndicator size={25} />
      ) : (
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
      )}
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() =>
            onClose ? onClose() : navigation.navigate('TeamForm')
          }
          style={styles.addButtonContainer}
        >
          <View style={styles.addButton}>
            <Text style={styles.plusIcon}>{onClose ? 'X' : '+'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'rgb(65,133,148)',
    borderRadius: 100,
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
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgb(162,231,195)'
  },
  plusIcon: {
    fontSize: 25,
    marginBottom: 4,
    color: 'rgb(162,231,195)'
  },
})
