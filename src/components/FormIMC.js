// importando funções do react_native
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

// importando os componentes auxiliares
import Result from "./Result";
import Classification from "./Classificacao";
import IdealWeight from "./Pesoideal";

// Declarando as variáveis
const FormIMC = () => {
  const [peso, setPeso] = useState(0);         // estado do peso
  const [altura, setAltura] = useState(0);     // estado da altura
  const [imc, setImc] = useState(null);        // estado do valor do IMC

  // cálculo do imc
  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100;  // convertendo altura em metros
      const imcCalculado = (
        parseFloat(peso) / (alturaMetros * alturaMetros)
      ).toFixed(2); // cálculo do IMC com 2 casas decimais
      setImc(imcCalculado); // atualizando o estado do IMC
    }
  };

  // Retorno do cálculo
  return (
    <View style={styles.formContainer}>
      {/* caixa de entrada do peso */}
      <TextInput
        style={styles.input}
        placeholder="Peso (Kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      {/* caixa de entrada da altura */}
      <TextInput
        style={styles.input}
        placeholder="Altura (Cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      {/* botão para calcular o IMC */}
      <Button title="Calcular IMC" onPress={calcularIMC} />

      {/* exibe o resultado do IMC se tiver o cálculo */}
      {imc && (
        <>
          <Result imc={imc} />

          {/* exibe a classificação de acordo com o IMC */}
          <Classification imc={imc} />

          {/* exibe o peso ideal mínimo e máximo de acorco com a altura */}
          <IdealWeight altura={altura} />
        </>
      )}
    </View>
  );
};

// Estilização do componente com StyleSheet
const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 10,
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

// Exportando o FormIMC
export default FormIMC;
