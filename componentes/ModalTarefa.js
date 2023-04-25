import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';


export default function App(props) {
    const [modal,setModal] = useState(false)


    const Nomear = async ()=> {
        if (props.Nome =="") {
            Alert.alert("Nome","O nome deve ser preenchido")
        
        }else{
            const newt = {Tipo:props.Tipo,Cor:props.Cor,Nome:props.Nome}
            const novo = [...props.Nota,newt]
            props.setNota(novo);
            try {
                const salvarNota = JSON.stringify(novo)
                await AsyncStorage.setItem('@Nota', salvarNota)
            } catch (e) {
                // saving error
            }
            
            const  id=props.Nota.length;
            props.setId(id)
            props.setPagina("PaginaAddTarefa")
        }
    }
    
        return(
            <View style={styles.container}>
                <Modal
                    visible={modal}
                    animationType="fade"
                    transparent={true}
                >
                    
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.Fechar} onPress={()=>setModal(false)}>
                            <Text>X</Text>
                        </TouchableOpacity>
                        <Text style={styles.txtModal}>Digite o nome da tarefa:</Text>
                        <TextInput
                            placeholder='Nome'
                            onChangeText={(text)=>props.setNome(text)}
                            style={styles.TXTImp}
                        />
                        <Text style={styles.txtCor}>SELECIONE UM COR</Text>
                        <View style={styles.BoxCor}>
                            <TouchableOpacity 
                                style={[styles.cor,{backgroundColor:'rgb(255,195,119)'}]}
                                onPress={()=>props.setCor('rgb(255,195,119)')}
                            />
                            <TouchableOpacity 
                                style={[styles.cor,{backgroundColor:'rgb(23,195,178)'}]}
                                onPress={()=>props.setCor('rgb(23,195,178)')}    
                            />
                            <TouchableOpacity 
                                style={[styles.cor,{backgroundColor:'rgb(254,109,115)'}]}
                                onPress={()=>props.setCor('rgb(254,109,115)')}    
                            />
                            <TouchableOpacity 
                                style={[styles.cor,{backgroundColor:'rgb(22,83,104)'}]}
                                onPress={()=>props.setCor('rgb(22,83,104)')}    
                            />
                        </View>
                        <TouchableOpacity
                            onPress={()=>Nomear()}
                            style={styles.BTNCriar}
                        >
                            <Text>CRIAR</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                
                <TouchableOpacity
                    style={styles.BTN}
                    onPress={()=>setModal(true)}
                >
                    <AntDesign name="plus" size={40} color="black" />
                </TouchableOpacity>
            
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
        width:'84%',
        height:300,
        marginTop:'30%',
        padding:25,
        alignSelf:"center"
    },
    txtModal:{
        textAlign:"center",
        marginBottom:10,
        fontSize:18,
        color:"#fff"
    },
    txtCor:{
        textAlign:"center",
        marginBottom:10,
        marginTop:15,
        fontSize:18,
        color:"#fff"
    },
    Fechar:{
        backgroundColor:"red",
        width:30,
        height:30,
        borderRadius:15,
        alignItems:"center",
        paddingTop:4,
        position:"absolute",
        right:-15,
        top:-15,
        elevation:3
    },
    BTN:{
        backgroundColor:"rgb(255,203,119)",
        width:54,
        height:54,
        borderRadius: 27,
        elevation:3,
        justifyContent:"center",
        alignItems:"center"
    },
    TXTImp:{
        backgroundColor:"rgba(255,255,255,0.5)",
        padding:8
    },
    BTNCriar:{
        backgroundColor:"rgb(255,195,119)",
        marginTop:35,
        padding:8,
        alignItems:"center"
    },
    cor:{
        width:35,
        height:35,
        backgroundColor:"red"
    },
    BoxCor:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})