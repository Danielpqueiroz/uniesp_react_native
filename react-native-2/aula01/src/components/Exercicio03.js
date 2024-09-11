import { View, Text, TextInput, StyleSheet } from 'react-native'
import { React, useState } from 'react'

const Exercicio03 = () => {

    const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Digite algo aqui..."
        style={styles.text}
      />
      <Text style={styles.text}>Você digitou: {text} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100%',
        padding: 100, 
        paddingVertical: 100, 
        backgroundColor: '#f5f5f5', 
        
    },
    text: {
        fontSize: 24,
        marginTop: 20,
    }
})

export default Exercicio03