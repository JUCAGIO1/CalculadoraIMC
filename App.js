//importando todos os outros componentes já feitos para serem usados
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

//exportando a função principal
export default function App() {
  return (
    /*conteiner principal do app*/
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}

// Estilos aplicados ao container principal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});
