import { StyleSheet, Text, TouchableOpacity, View,FlatList,TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalCarinho from './ModalCarinho'
import ModalConcluir from './ModalConcluir'


export default function App(props) {

  const edit = (item)=>{
    props.setConteudoData(item)
    const index = props.Nota.indexOf(item);
    props.setId(index)
    props.setPagina("PaginaEditNota")
  }
  
  const editLista = (Conteudo)=>{
    const index = props.Nota[props.Id].Conteudo.indexOf(Conteudo);
    props.setIdItem(index)
    console.log(props.Nota[props.Id].Conteudo[index].Item)
    props.setPagina("PaginaEditItem")
  }  
  const editTarefa = (Conteudo)=>{
    const index = props.Nota[props.Id].Conteudo.indexOf(Conteudo);
    props.setIdItem(index)
    console.log(props.Nota[props.Id].Conteudo[index].Item)
    props.setPagina("PaginaEditTarefa")
  }  
  const delet = async (item) =>{
    let newNota = props.Nota.filter(function(val){
      return val != item;
    });
    props.setNota(newNota);
    try {
      const salvarNota = JSON.stringify(newNota)
      await AsyncStorage.setItem('@Nota', salvarNota)
    } catch (e) {
      // saving error
    }
  }

  const deleItem = async (Conteudo)=>{
    let newNota = props.Nota[props.Id].Conteudo.filter(function(val){
      return val != Conteudo;
    });
    props.Nota[props.Id].Conteudo = newNota
    let neNota = props.Nota
    props.setNota(neNota);
    try {
      const salvarNota = JSON.stringify(neNota)
      await AsyncStorage.setItem('@Nota', salvarNota)
      props.setPagina("AtualizarLista")
    } catch (e) {
      // saving error
    }

  }
  const deleTarefa = async (Conteudo)=>{
    let newNota = props.Nota[props.Id].Conteudo.filter(function(val){
      return val != Conteudo;
    });
    props.Nota[props.Id].Conteudo = newNota
    let neNota = props.Nota
    props.setNota(neNota);
    try {
      const salvarNota = JSON.stringify(neNota)
      await AsyncStorage.setItem('@Nota', salvarNota)
      props.setPagina("AtualizarTarefa")
    } catch (e) {
      // saving error
    }

  }
  
  const verItens = (item)=>{
    props.setConteudoData(item)
    const index = props.Nota.indexOf(item);
    props.setId(index)
    props.setPagina("PaginaVerItens")
  }
  const verTarefas = (item)=>{
    props.setConteudoData(item)
    const index = props.Nota.indexOf(item);
    props.setId(index)
    props.setPagina("PaginaVerTarefas")
  }
  
  const renderItem = ({ item }) => {
    if(props.Tipo == "Nota"){
      if (item.Tipo === 'Nota') {
        return (
          <View style={styles.container}>
            <View style={styles.Item}>
              <View style={[styles.tag,{backgroundColor:(item.Cor)}]}>
              </View>
              <View style={styles.ItemTXTDELET}>
                <TouchableOpacity onPress={()=>edit(item)}>
                  <Text style={styles.TXT}>{item.Nome}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> delet(item)}>
                  <AntDesign name="delete" size={30} color="black" /> 
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }
        return null;
      };
    if(props.Tipo == "Lista"){
      if (item.Tipo === 'Lista') {
        return (
          <View style={styles.container}>
            <View style={styles.Item}>
              <View style={[styles.tag,{backgroundColor:(item.Cor)}]}>
              </View>
              <View style={styles.ItemTXTDELET}>
                <TouchableOpacity onPress={()=>verItens(item)}>
                  <Text style={styles.TXT}>{item.Nome}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> delet(item)}>
                  <AntDesign name="delete" size={30} color="black" /> 
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }
        return null;
      };
    if(props.Tipo == "Tarefas"){
      if (item.Tipo === 'Tarefas') {
        return (
          <View style={styles.container}>
            <View style={styles.Item}>
              <View style={[styles.tag,{backgroundColor:(item.Cor)}]}>
              </View>
              <View style={styles.ItemTXTDELET}>
                <TouchableOpacity onPress={()=>verTarefas(item)}>
                  <Text style={styles.TXT}>{item.Nome}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> delet(item)}>
                  <AntDesign name="delete" size={30} color="black" /> 
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }
        return null;
      };
    if(props.Tipo == "Itens"){
      if (item.Nome === props.Nota[props.Id]["Nome"]) {
        return (
          <View style={styles.container}>
            {item.Conteudo.map((Conteudo, index) => (
            <View key={index} style={styles.Itens}>
              <View style={styles.ItemTXTDELET}>
                <View>
                <TouchableOpacity 
                  onPress={() => editLista(Conteudo)}
                >
                  <Text style={styles.TXT}>{Conteudo.Item}</Text>
                  <Text >{Conteudo.Local}</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>deleItem(Conteudo)}>
                  <AntDesign name="delete" size={30} color="black" /> 
                </TouchableOpacity>
              </View>
              <View style={[styles.ItemTXTDELET,{paddingTop:5,paddingBottom:8}]}>
                <ModalCarinho
                  Item = {Conteudo}
                  Nota = {props.Nota}
                  setNota = {props.setNota}
                  setPagina = {props.setPagina}
                />
                <Text >Valor: {Conteudo.Valor}</Text>
                <Text >Quantidade: {Conteudo.Quantidade}</Text>
              </View>
            </View>
          ))}
          </View>
        );
      }
        return null;
      };
    if(props.Tipo == "ItensTarefa"){
      if (item.Nome === props.Nota[props.Id]["Nome"]) {
        return (
          <View style={styles.container}>
            {item.Conteudo.map((Conteudo, index) => (
            <View key={index} style={styles.Itens}>
              <View style={styles.ItemTXTDELET}>
                <View>
                <TouchableOpacity 
                  onPress={() => editTarefa(Conteudo)}
                >
                  <Text style={styles.TXT}>{Conteudo.Item}</Text>
                  <Text >{Conteudo.Local}</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>deleTarefa(Conteudo)}>
                  <AntDesign name="delete" size={30} color="black" /> 
                </TouchableOpacity>
              </View>
              <View style={[styles.ItemTXTDELET,{paddingTop:5,paddingBottom:8}]}>
                <ModalConcluir
                  Item = {Conteudo}
                  Nota = {props.Nota}
                  setNota = {props.setNota}
                  setPagina = {props.setPagina}
                />
                <View style={styles.BoxIcon}>
                  <AntDesign name="calendar" size={24} color="black" style={styles.DataHoraTXT}/>
                  <Text >{Conteudo.Dia}</Text>
                </View>
                
                <View style={styles.BoxIcon}>
                  <AntDesign name="clockcircleo" size={24} color="black" style={styles.DataHoraTXT}/>
                  <Text >{Conteudo.Hora}</Text>
                </View>
              </View>
            </View>
          ))}
          </View>
        );
      }
        return null;
      };
    }
    
  
    return (
      <FlatList
        data={props.Nota}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.Nome + index}
      />
    );
  
};


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
  Itens:{
    width:"90%",
    backgroundColor:"#fff",
    justifyContent:"space-between",
    alignSelf:"center",
    marginBottom:5,
    marginTop:5,
    
  },
  ItemTXTDELET:{
    width:"95%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    alignSelf:"center",
    paddingRight:"3%"
  },
  tag:{
    width:8
  },
  TXT:{
    fontSize:22
  },
  BoxIcon:{
    flexDirection:"row",
    alignItems:"center"
  },
  DataHoraTXT:{
    paddingRight:5
  }
});

