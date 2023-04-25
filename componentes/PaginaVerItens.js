import { StyleSheet, Text, TouchableOpacity, View,FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ModalCarinho from './ModalCarinho';

export default function App(props) {

    
  
    // console.log(props.Notas[props.Id]["Titulo"])
    const delet= async (id) =>{

      // let newNota = props.Notas[props.Id].filter(function(val){
      //   return val.id != id;
      // });

      console.log(props.Notas[props.Id][id])

      // props.setNota(newNota);
  
      // try {
      //   const salvarNota = JSON.stringify(newNota)
      //   await AsyncStorage.setItem('@Nota', salvarNota)
      // } catch (e) {
      //   // saving error
      // }
    }
    
    
    return (
        <View style={styles.container}>
          {/* <View key={item.id}>
            <Text>{item.Titulo}</Text>
            <View>
              {item.Itens.map(Itens.Item =>(
                <Text key={}></Text>
              ))}
            </View>
          </View> */}
        </View>
      );
    
  
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
      backgroundColor:"rgb(254,249,239)",
      flex:1,
    },
    Box:{
      width:"95%",
      backgroundColor:"rgba(255,203,119,0.5)",
      padding:8,
      alignSelf:"center",
      marginTop:12
    },
    Box1:{
      flexDirection:"row",
      justifyContent:"space-between"
    },
    TXTItem:{
      fontSize:23
    }
});