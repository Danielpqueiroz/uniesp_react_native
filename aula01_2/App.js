import { View, Text } from 'react-native'
import React from 'react'
import Exercicio01 from './src/components/Exercicio01'
import Counter from './src/components/Counter'
import Formulario from './src/components/Formulario'

const App = () => {
  return (
    <View>
      <Exercicio01 nome="Daniel Pontes"/>
      <Counter />
      <Formulario />
    </View>
  )
}

export default App