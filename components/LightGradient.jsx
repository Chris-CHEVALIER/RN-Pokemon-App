import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { theme } from '../styles/theme'

export default function LightGradient () {
  return (
    <LinearGradient
      colors={[theme.lightGradient, theme.darkGradient]}
      style={styles.background}
    />
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height
  }
})
