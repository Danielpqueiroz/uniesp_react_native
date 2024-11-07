import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListaDeItens = () => {
  // Array de strings que serão renderizados como itens de Text
  const itens = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <View style={styles.container}>
      {itens.map((item, index) => (
        <Text key={index} style={styles.textItem}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textItem: {
    fontSize: 16,
    color: 'black',
    margin: 10,
  }
});

export default ListaDeItens;
