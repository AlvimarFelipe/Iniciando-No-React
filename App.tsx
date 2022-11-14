import React from "react";
import { Image,StyleSheet, Text, View, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('./assets/Eu.png')} style={styles.perfil} />
        <Text style={styles.nome}>Alvimar Felipe - 19</Text>
      </View>
      
      <View style={styles.container2}>
        <Text style={styles.conteudo}>• Estudo no SENAC na area de Analise e Desenvolvimento de Sistemas, atravez do programa Embarque Digital</Text>
        <Text style={styles.conteudo}>• Atualmente estou no 3° período</Text>
        <Text style={styles.conteudo}>Linguagens: HTML, CSS, node.js</Text>
        <Text style={styles.conteudo}>Banco: MySQL</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#313455',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',

  },
  container2:{
    justifyContent: 'center'
  },
  nome:{
    textAlign:'center',
    fontWeight:'900',
    color: '#cfc',
    paddingBottom:40,
    paddingTop:10
  },
  conteudo:{
    fontWeight:'bold',
    color: '#ffc',
    paddingLeft:24,   
    paddingRight:24,   
    textAlign: 'left'
  },
  paragrafo:{
    marginLeft:15,
  },
  perfil: {
    width: 200,
    height: 200,
    borderRadius: 1000,
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#ccf'
  }
});
