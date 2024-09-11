import { View, Text, Button, StyleSheet } from 'react-native'
import { React, useState } from 'react'

const Exercicio02 = () => {

    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador+1)
    }

    function decrementar() {
        setContador(contador-1)
    }

  return (
    <View style={styles.container}>
        <Button title='incrementar'  onPress={incrementar} />
        <Text></Text>
        <Button title='decrementar'  onPress={decrementar} />
        <Text></Text>
        <Text style={styles.text}>O contador está em: {contador} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItens: 'center',
        justifyContent: 'center',
        padding: 80,
        paddingVertical: 300,
        fontSize: 24,
        
    },
    
    text: {
        fontSize: 24,
        marginTop: 20,
    }
})

export default Exercicio02