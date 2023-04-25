import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';


export default function App(props) {
    const [modal,setModal] = useState(false)

    const sim = async () =>{
        props.Item.Carinho = 1    
        

        try {
            const salvarNota = JSON.stringify(props.Nota)
            await AsyncStorage.setItem('@Nota', salvarNota)
        } catch (e) {
        // saving error
        }
        
        setModal(false) 
        props.setPagina("PaginaVerItens")
        
    }
    const nao = async () =>{
        props.Item.Carinho = 0   
        
        try {
            const salvarNota = JSON.stringify(props.Nota)
            await AsyncStorage.setItem('@Nota', salvarNota)
        } catch (e) {
            // saving error
        }
        
        setModal(false)  
        props.setPagina("PaginaVerItens")
    }

    return(
        <View >
            <View style={styles.modal}>
                <Text style={styles.txtModal}>Adicioinar ao carinho?</Text>
                <View style={styles.BOX}>
                    <TouchableOpacity
                            onPress={()=>sim()}
                            style={{width:"50%",margin:5,backgroundColor:'rgb(23,195,178)'}}
                        >
                            <Text style={styles.TXTBTN}>SIM</Text>
                        </TouchableOpacity>
    
                        <TouchableOpacity
                            onPress={()=>nao()}
                            style={{width:"50%",margin:5,backgroundColor:'rgb(254,109,115)'}}
                            >
                                <Text style={styles.TXTBTN}>NÃO</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
        /*
    Cores:
    Titulo: 22,83,104
    BNT SIM: 23,195,178
    BNT NAO: 254,109,115
    BUTTOM: 255,195,119
    CENTRO: 254,249,239
    */

    modal:{
        backgroundColor: "rgba(50,50,50,0.9)",
        width:'90%',
        height:150,
        marginLeft:'5%',
        marginTop:'40%',
        padding:25,
    },
    txtModal:{
        textAlign:"center",
        marginBottom:10,
        fontSize:18,
        color:"#fff"
    },
    BOX:{
        width:"90%",
        flexDirection:"row"
        
    },
    TXTBTN:{
        textAlign:"center",
        paddingBottom:12,
        paddingTop:12
    }
})