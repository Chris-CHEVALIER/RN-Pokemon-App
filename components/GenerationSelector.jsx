import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { theme } from '../styles/theme'

const generationNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function GenerationSelector ({
  onGenerationChange,
  selectedGeneration
}) {
  return (
    <View style={styles.generationContainer}>
      <Text style={styles.generationTitle}>GÉNÉRATION</Text>
      <View style={styles.generationSelector}>
        {generationNumbers.map(generationNumber => (
          <TouchableOpacity
            style={[
              styles.generationNumber,
              selectedGeneration === generationNumber &&
                styles.selectedGenerationButton
            ]}
            key={generationNumber}
            onPress={() => onGenerationChange(generationNumber - 1)}
          >
            <Text
              style={[
                styles.generationText,
                selectedGeneration === generationNumber &&
                  styles.selectedGenerationText
              ]}
            >
              {generationNumber}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  generationContainer: {
    backgroundColor: theme.primary,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 25,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    left: '1%',
    width: '98%'
  },
  generationTitle: {
    color: theme.secondary,
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
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.secondary
  },
  generationText: {
    fontSize: 16,
    color: theme.secondary
  },
  selectedGenerationButton: {
    borderWidth: 1,
    borderColor: 'white'
  },
  selectedGenerationText: {
    color: 'white',
    fontWeight: 'bold'
  }
})
