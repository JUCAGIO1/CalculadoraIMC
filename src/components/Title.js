//importando o text e stylesheet do react native
import { Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

//estilo da letra grande do programa
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom: 24,
    },
});

export default Title;