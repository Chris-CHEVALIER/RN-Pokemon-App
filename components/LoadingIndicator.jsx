import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

export default function LoadingIndicator () {
  return <ActivityIndicator style={styles.loadingIndicator} size={25} />
}

const styles = StyleSheet.create({
  loadingIndicator: {
    marginTop: 10
  }
})
