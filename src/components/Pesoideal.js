//importando o react
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// funçao que exibe o peso ideal
const IdealWeight = ({ altura }) => {
  const alturaMetros = parseFloat(altura) / 100;

  const pesoMin = (18.5 * alturaMetros * alturaMetros).toFixed(2);
  const pesoMax = (24.9 * alturaMetros * alturaMetros).toFixed(2);

  return (
    <>
      <Text style={styles.text}>Peso Ideal Mínimo: {pesoMin} kg</Text>
      <Text style={styles.text}>Peso Ideal Máximo: {pesoMax} kg</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
  },
});

export default IdealWeight;
