import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { useState } from 'react';


export default function App(props) {
    const [modal,setModal] = useState(false)

    const cor = (val) =>{
        props.setCor(val)
        setModal(false)
        
    }
    
    return(
        <View >
            <Modal
                visible={modal}
                animationType="fade"
                transparent={true}
            >
                
                <View style={styles.modal}>
                    <Text style={styles.txtModal}>Selecione a cor da nota:</Text>
                    <View style={styles.BOX}>
                    <TouchableOpacity
                        onPress={()=>cor("rgb(255,195,119)")}
                        style={{height:50,width:50,margin:5,backgroundColor:'rgb(255,195,119)'}}
                        />

                    <TouchableOpacity
                        onPress={()=>cor('rgb(23,195,178)')}
                        style={{height:50,width:50,margin:5,backgroundColor:'rgb(23,195,178)'}}
                        />

                    <TouchableOpacity
                        onPress={()=>cor('rgb(254,109,115)')}
                        style={{height:50,width:50,margin:5,backgroundColor:'rgb(254,109,115)'}}
                        />

                    <TouchableOpacity
                        onPress={()=>cor('rgb(22,83,104)')}
                        style={{height:50,width:50,margin:5,backgroundColor:'rgb(22,83,104)'}}
                        />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={{
                    width: 40,
                    height:40,
                    backgroundColor: props.Cor,
                    borderColor:"#fff",
                    borderWidth:2,
                  }}
                onPress={()=>setModal(true)}
            >
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
        backgroundColor: "rgba(50,50,50,0.3)",
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
    },
    BOX:{
        flexDirection:"row"
    }
})