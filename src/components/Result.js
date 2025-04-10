// Importa o React
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Result = ({ imc }) => {
    return (
        <Text style = {styles.result}>Seu IMC é: {imc}</Text>
    );
}

// Estilo aplicado ao texto do resultado
const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color:'#333',
    },
});

//exportando o Result
export default Result;