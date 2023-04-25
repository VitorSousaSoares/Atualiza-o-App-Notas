import { StyleSheet, Text, TouchableOpacity, View,FlatList} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App(props) {
  const removeData= async (id) =>{
    let newNota = props.Notas.filter(function(val){
      return val.id != id;
    });
    props.setNota(newNota);

    try {
      const salvarNota = JSON.stringify(newNota)
      await AsyncStorage.setItem('@Nota', salvarNota)
    } catch (e) {
      // saving error
    }
  }

  const veritens = (id) =>{
    props.setId(id)
    props.setPagina("PaginaVerItens")
  }

  const rendeItem = ({item}) =>{
    if (item.Tipo == "Nota"){
      return null;
      
    }
    return(
      <View style={styles.container}>
          <View style={styles.Item}>
            <View style={[styles.tag,{backgroundColor:(item.Cor)}]}></View>
            <View style={styles.ItemTXTDELET}>
              <TouchableOpacity
                onPress={()=>veritens(item.id)}
              >
                <Text >{item.Titulo}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>removeData(item.id)}>
                <AntDesign name="delete" size={30} color="black" /> 
              </TouchableOpacity>  
            </View>
          </View>
      </View>
    );
  } ;

  
    return(
      <FlatList
        data={props.Notas.filter(item => item.Tipo)}
        renderItem={rendeItem}
        keyExtractor={item => item.id}
      />
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
      backgroundColor:"rgb(254,249,239)",
      flex:1,
    },
    Item:{
      width:"90%",
      backgroundColor:"#fff",
      flexDirection:"row",
      justifyContent:"space-between",
      alignSelf:"center",
      marginBottom:5,
      marginTop:5,
      height:50,
    },
    ItemTXTDELET:{
      width:"95%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingRight:"3%"
    },
    tag:{
      width:8
    },
});