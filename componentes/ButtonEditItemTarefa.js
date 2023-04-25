import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App(props) {
    const adicionar = async () =>{
            console.log(props.Nota[props.Id].Conteudo[props.IdItem])
            const NovaNota = [...props.Nota];
            if (props.Local != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Local = props.Local;
            }
            if (props.Hora != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Hora = props.Hora;
            }
            if (props.Dia != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Dia = props.Dia;
            }
            if (props.Concluido != "") {
                NovaNota[props.Id].Conteudo[props.IdItem].Concluido = props.Concluido;
            }
            
            props.setNota(NovaNota)
            
            try {
                const salvarNota = JSON.stringify(NovaNota)
                await AsyncStorage.setItem('@Nota', salvarNota)
            } catch (e) {
                    // saving error
            }
            props.setPagina("PaginaVerTarefas")
            props.setItem("")
            props.setHora("")
            props.setDia("")
            props.setLocal("")
            props.setConcluido("0")
    }


    return(
        <View >
            <TouchableOpacity 
                style={styles.TXTBTN}
                onPress={()=>adicionar()}
            >
                <Text style={styles.TXT}>CONCLUIR</Text>
            </TouchableOpacity>
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

    TXTBTN:{
        backgroundColor: "rgb(255,203,119)",
        padding:12,
        alignItems:"center",
    },
    TXT:{
        fontSize:18
    }
});