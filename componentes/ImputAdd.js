import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App(props) {
  return(
    <View style={styles.container}>
        <Text style={styles.TXT}>{props.tag}:</Text>
        <TextInput
            padding="5%"
            backgroundColor="rgba(255,255,255,0.7)"
            autoFocus={props.foco}
            placeholder={props.tag}
            multiline={props.linhas}
            onChangeText={(text)=>props.setTXT(text)}
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
    paddingTop:"2%",
    paddingLeft:"5%",
    paddingRight:"5%"
  },
  TXT:{
    paddingTop:"1%",
    paddingLeft:"5%",
    backgroundColor:"rgba(255,255,255,0.7)"
  }

});