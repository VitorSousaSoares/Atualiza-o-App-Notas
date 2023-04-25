import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App(props) {

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
    backgroundColor:"rgb(34,124,157)",
    padding:15,
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