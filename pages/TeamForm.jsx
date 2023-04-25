import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { LinearGradient } from 'expo-linear-gradient'
import { addTeam } from '../Fire'

export default function TeamForm ({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    addTeam({
      name: data.teamName,
      trainer: data.trainerName,
      pokemons: []
    })
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgb(104, 179, 135)', 'rgb(55, 98, 118)']}
        style={styles.background}
      />
      <Text style={styles.formTitle}>Équipe Pokémon</Text>
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name='teamName'
          defaultValue=''
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <>
              {/* <Text style={styles.label}>Nom de l'équipe</Text> */}
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder="Saisissez le nom de l'équipe"
                placeholderTextColor='rgb(162,231,195)'
                style={styles.input}
              />
              {errors.teamName && (
                <Text style={styles.textError}>Ce champ est requis</Text>
              )}
            </>
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name='trainerName'
          defaultValue=''
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <>
              {/* <Text style={styles.label}>Nom du dresseur</Text> */}
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder='Saisissez le nom du dresseur'
                placeholderTextColor='rgb(162,231,195)'
                style={styles.input}
              />
              {errors.trainerName && (
                <Text style={styles.textError}>Ce champ est requis</Text>
              )}
            </>
          )}
        />
      </View>

      {/* <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TeamList')}
          style={[styles.iconButtonContainer, styles.addButtonContainer]}
        >
          <View style={styles.closeButton}>
            <Text style={styles.crossIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </View> */}

      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <LinearGradient
          colors={['rgb(174, 217, 156)', 'rgb(98, 201, 172)']}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Créer</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TeamList')}
          style={[styles.iconButtonContainer, styles.closeButtonContainer]}
        >
          <View style={styles.closeButton}>
            <Text style={styles.crossIcon}>X</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height
  },
  formTitle: {
    color: '#414141',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  inputContainer: {
    width: '90%',
    margin: 18
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#414141'
  },
  input: {
    borderColor: 'rgb(162,231,195)',
    borderWidth: 3,
    borderRadius: 100,
    backgroundColor: 'white',
    fontSize: 18,
    color: 'rgb(162,231,195)',
    textAlign: 'center',
    height: 45
  },
  textError: {
    color: '#414141',
    textAlign: 'right',
    marginTop: 5
  },
  submitButton: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 100
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  },
  iconButtonContainer: {
    backgroundColor: 'rgb(65,133,148)',
    borderRadius: 100,
    width: 45,
    height: 45,
    margin: 'auto',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonContainer: {
    marginBottom: 10
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 145,
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
