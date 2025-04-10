//importaçao do react
import React from 'react';
import { Text, StyleSheet } from 'react-native';

//função que recebe o IMC e mostra a classificaçao
const Classification = ({ imc }) => {
  //converte string para número
  const valor = parseFloat(imc);

  // Função que retorna a faixa do IMC
  const getClassificacao = () => {
    if (valor < 18.5) return 'Abaixo do peso';
    if (valor < 25) return 'Peso normal';
    if (valor < 30) return 'Sobrepeso';
    if (valor < 35) return 'Obesidade grau 1';
    if (valor < 40) return 'Obesidade grau 2';
    return 'Obesidade grau 3 (mórbida)';
  };

  return <Text style={styles.text}>Classificação: {getClassificacao()}</Text>;
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  },
});

//exportando a classificaçao
export default Classification;
