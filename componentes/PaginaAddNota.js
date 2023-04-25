import {StyleSheet, View } from 'react-native';
import ImputAdd from './ImputAdd';

export default function App(props) {
  return(
    <View style={styles.container}>
      <ImputAdd
        tag="Titulo"
        linhas={false}
        foco={true}
        setTXT={props.setNome}
      />
      <ImputAdd
        tag="Nota"
        linhas={true}
        foco={false}
        setTXT={props.setConteudoNota}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    
    /*Cores de referencia
    Fundo: 254,249,239
    Top: 34,124,157
    BTN GERAL: 255,203,119
    BTN Sim: 23,195,178
    BTN Nao: 254,109,115
    */
  container:{
    flex:1
  },
  TXT:{
    fontSize:25,
    color:"#fff"
  },
  Home:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"rgb(34,124,157)",
    padding:15,
  }
});