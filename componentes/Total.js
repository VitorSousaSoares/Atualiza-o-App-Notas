import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';


export default function App(props) {
    function total() {
        if (props.Nota != "") {            
            let total = props.Nota[props.Id].Conteudo.filter(function(val){
                return val.Carinho != "0";
            }); 
                
                
            let som = total.reduce( function( prevVal, elem ) {
                return prevVal + elem.Total;
            }, 0 );
            const t = parseFloat((som).toFixed(2))
            props.setTt(t)
            return(
                <Text>R$: {props.Tt}</Text>
                )
                
            
        }
       
    }

    return(
        <View >
            <Text>Total: {total()}</Text>
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
        height:200,
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
    chek:{
        textAlign:"center",
        color:"red"
    },
    TXTBTN:{
        textAlign:"center",
        paddingBottom:12,
        paddingTop:12
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
})