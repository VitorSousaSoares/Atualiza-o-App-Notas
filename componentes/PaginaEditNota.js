import { StyleSheet, View } from 'react-native';
import ImputEdit from './ImputEdit';

export default function App(props) {
  return(
    <View style={styles.container}>
      <ImputEdit
        linhas={true}
        foco={false}
        setTXT={props.setConteudoNota}
        TXT={props.Nota[props.Id]["Conteudo"]["ConteudoDaNota"]}
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
});