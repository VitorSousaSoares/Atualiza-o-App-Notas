import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ModalCor from './ModalCor';

export default function App(props) {

  const voltar=()=>{
    props.setPagina( props.ir)
  }

    if (props.Tipo === "LogoIcone") { 
      return (
        <View style={styles.Home}>
          <Text style={styles.TXT}>{props.Titulo}</Text>
          <TouchableOpacity onPress={()=>props.setPagina( props.ir)}>
            <AntDesign name={props.icone} size={28} color="#fff" padding={5}/>
          </TouchableOpacity>
       </View>
      );
    }
    else if (props.Tipo === "TXTVoltaLista") { 
      
      if (props.Nota[props.Id].hasOwnProperty('Conteudo')) {
        return (
          <View style={styles.Home}>
            <Text style={styles.TXT}>{props.Titulo}</Text>
            <TouchableOpacity onPress={()=>voltar()}>
              <AntDesign name={props.icone} size={28} color="#fff" padding={5}/>
            </TouchableOpacity>
         </View>
        );
        
      } else {                                    
        return (
          <View style={styles.Home}>
            <Text style={styles.TXT}>{props.Titulo}</Text>
         </View>
        );
      }








      // return (
      //   <View style={styles.Home}>
      //     <Text style={styles.TXT}>{props.Titulo}</Text>
      //     <TouchableOpacity onPress={()=>voltar()}>
      //       <AntDesign name={props.icone} size={28} color="#fff" padding={5}/>
      //     </TouchableOpacity>
      //  </View>
      // );
    }
    else if (props.Tipo === "TXT") { 
      return (
        <View style={styles.container}>
          <Text style={styles.TXT}>{props.Titulo}</Text>
       </View>
      );
    }
    else if (props.Tipo ==="iconTXTicon") {
      return (
        <View style={styles.container3}>
          <TouchableOpacity 
            onPress={()=>props.setPagina(props.voltar)}
            style={styles.voltar}
          >
            <AntDesign name="arrowleft" size={25} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.TXT}>{props.Titulo}</Text>
          <ModalCor
            Cor={props.Cor}
            setCor={props.setCor}
          />
       </View>
      );
    }
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
  container3:{
    backgroundColor:"rgb(34,124,157)",
    padding:15,
    flexDirection:"row",
    justifyContent:"space-around"
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
  },
  voltar:{
    alignSelf:"center"
  }
});