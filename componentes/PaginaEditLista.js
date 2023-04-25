import { StyleSheet, Text, View } from 'react-native';
import ImputEditItemLista from './ImputEtidItemLista';
import { TextInputMask } from 'react-native-masked-text';
import {Picker} from '@react-native-picker/picker';

export default function App(props) {
  return(
    <View style={styles.container}>
    
    <ImputEditItemLista
    tag = {"Local"}
    linhas={false}
    foco={false}
    setTXT={props.setLocal}
    TXT={props.Nota[props.Id].Conteudo[props.IdItem].Local}
    />
    
    <ImputEditItemLista
    tag = {"Quantidade"}
    linhas={true}
    foco={false}
    setTXT={props.setQuantidade}
    TXT={props.Nota[props.Id].Conteudo[props.IdItem].Quantidade}
    />
    <View style={styles.Valor}>
        <Text>Valor:</Text>
        <TextInputMask
            type={'money'}
            options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
            }}
            value={props.Nota[props.Id].Conteudo[props.IdItem].Valor}
            onChangeText={text => props.setValor(text)}
        />
    </View>
      <View style={styles.BOXSel}>
        <Text style={styles.TXTBOXPIC}>Adicionar ao Carinha:</Text>
        <View style={styles.BOXPIC}>
            <Picker
                selectedValue={props.Carinho}
                onValueChange={(itemValue, itemIndex) =>
                props.setCarinho(itemValue)
                
            }>
                <Picker.Item label="NÃO" value="0" style={styles.TXTPIC}/>
                <Picker.Item label="SIM" value="1" style={styles.TXTPIC}/>
            </Picker>
        </View>
      </View>
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
  Valor:{
    marginTop:8,
    paddingTop:"2%",
    paddingBottom:"2%",
    paddingLeft:"5%",
    paddingRight:"5%",
    backgroundColor:"rgba(255,255,255,0.7)",
    width:"90%",
    alignSelf:"center"
  },
  BOXSel:{
    marginTop:8,
    width:"90%",
    alignSelf:"center",
    backgroundColor:"rgba(255,255,255,0.7)",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  BOXPIC:{
      width:120
  },
  TXTPIC:{
      fontSize:14
  },
  TXTBOXPIC:{
      textAlignVertical:"center",
      paddingLeft:8
  },
});