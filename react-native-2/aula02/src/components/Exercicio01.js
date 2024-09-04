import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Exercicio01 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box01} />
      <View style={styles.box02} />
      <View style={styles.box03} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box01: {
        height: 100,
        width: '100%',
        backgroundColor: 'red',
    },
    box02: {
        height: 100,
        width: '100%',
        backgroundColor: 'green',
    },
    box03: {
        height: 100,
        width: '100%',
        backgroundColor: 'blue',
    },

})

export default Exercicio01