import { FlatList, StyleSheet, ScrollView } from 'react-native'
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100vh'
  }
})
