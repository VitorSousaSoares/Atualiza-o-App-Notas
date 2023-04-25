import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';


export default function App(props) {

    const adicionarLista = async () =>{
        props.setNota("")
        try{
            const salvar = JSON.stringify([""])
            await AsyncStorage.setItem("@Nota",salvar)
        }catch(e){}
    }

    return(
        <View >
            <TouchableOpacity 
                style={styles.TXTBTN}
                onPress={()=>adicionarLista()}
            >
                <AntDesign name="dotchart" size={24} color="black" />
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