import { StyleSheet, View,Text } from 'react-native';
import ImputAdd from './ImputAdd';
import {Picker} from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text';

export default function App(props) {
  return(
    <View style={styles.container}>
      <ImputAdd
        tag="Item"
        linhas={true}
        foco={false}
        setTXT={props.setItem}
      />
      <ImputAdd
        tag="Local"
        linhas={true}
        foco={false}
        setTXT={props.setLocal}
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
          value={props.Valor}
          onChangeText={text => props.setValor(text)}
        />
      </View>

      <ImputAdd
        tag="Quantidade"
        linhas={true}
        foco={false}
        setTXT={props.setQuantidade}
      />

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
  Valor:{
    marginTop:8,
    paddingTop:"2%",
    paddingBottom:"2%",
    paddingLeft:"5%",
    paddingRight:"5%",
    backgroundColor:"rgba(255,255,255,0.7)",
    width:"90%",
    alignSelf:"center"
  }
});