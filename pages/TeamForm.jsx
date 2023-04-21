import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { LinearGradient } from 'expo-linear-gradient'

export default function TeamForm () {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <View>
      <LinearGradient
        colors={['rgb(245,245,245)', 'rgb(241, 254, 237)']}
        style={styles.background}
      />
      <View>
        <Controller
          control={control}
          name='teamName'
          defaultValue=''
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <>
              <Text style={styles.label}>Nom de l'équipe</Text>
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder="Entrez le nom de l'équipe"
                styles={styles.input}
              />
              {errors.teamName && (
                <Text style={styles.textError}>Ce champ est requis</Text>
              )}
            </>
          )}
        />
      </View>

      <View>
        <Controller
          control={control}
          name='trainerName'
          defaultValue=''
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <>
              <Text style={styles.label}>Nom du dresseur</Text>
              <TextInput
                onChangeText={onChange}
                value={value}
                placeholder='Entrez le nom du dresseur'
                style={styles.input}
              />
              {errors.trainerName && (
                <Text style={styles.textError}>Ce champ est requis</Text>
              )}
            </>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={styles.submitButton}
      >
        <Text>Créer l'équipe</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get('window').height
  },
  label: {},
  input: {},
  textError: {
    color: 'red',
    textAlign: 'center'
  }
})
