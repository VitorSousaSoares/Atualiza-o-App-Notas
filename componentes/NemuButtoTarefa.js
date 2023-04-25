import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ModalLista from "./ModalTarefa";

export default function App(props) {
    return(
        <View>
            <View style={styles.Volta}>
                <TouchableOpacity 
                    style={styles.BTN}
                    onPress={()=>props.setPagina(props.ir)}
                >
                    <AntDesign name="arrowleft" size={35} color="black" />
                    <Text style={styles.TXTBTN}>VOLTAR</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Add}>
                <ModalLista
                Nota={props.Nota}
                setNota = {props.setNota}
                setPagina={props.setPagina}
                setId={props.setId}
                setNome={props.setNome}
                Nome={props.Nome}
                setCor={props.setCor}
                Cor={props.Cor}
                Tipo = {props.Tipo}
                />
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
    Volta:{
        backgroundColor: "rgb(255,203,119)",
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:20,
    },
    BTN:{
        flexDirection:"row",
        alignItems:"center"
    },
    TXTBTN:{
        paddingLeft:8,
        fontSize:18,
        fontWeight:"bold"
    },
    Add:{
        backgroundColor:"rgb(254,249,239)",
        position:"absolute",
        right: 8,
        bottom:15,
        width:70,
        height:70,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 35,
    },
});