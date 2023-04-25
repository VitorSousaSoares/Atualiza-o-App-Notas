import React,{ useState} from "react";
import { TouchableOpacity, View, StyleSheet,Animated, TouchableHighlight} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function FloatingButton(props){
    const [rotateAnimation] = useState(new Animated.Value(0));
    const [PaginaNota] = useState(new Animated.Value(25));
    const [PaginaLista] = useState(new Animated.Value(25));
    const [PaginaTerafas] = useState(new Animated.Value(25));
    
    const [Menu,setMenu] = useState(false);
    
    const AbrirMenu = ()=>{
        setMenu(true);
        Animated.timing(rotateAnimation,{
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
        Animated.timing(PaginaNota,{
            toValue:100,
            duration:500,
            useNativeDriver:false,
        }).start();
        Animated.timing(PaginaLista,{
            toValue:80,
            duration:500,
            useNativeDriver:false,
        }).start();
        Animated.timing(PaginaTerafas,{
            toValue:100,
            duration:500,
            useNativeDriver:false,
        }).start();
    }
    
    const FecharMenu = ()=>{
        setMenu(false);
        Animated.timing(rotateAnimation,{
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
        Animated.timing(PaginaNota,{
            toValue:25,
                    duration:500,
                    useNativeDriver:false,
                }).start();
                Animated.timing(PaginaLista,{
                        toValue:25,
                        duration:500,
                        useNativeDriver:false,
                    }).start();
                    Animated.timing(PaginaTerafas,{
                            toValue:25,
                            duration:500,
            useNativeDriver:false,
        }).start();
    }

    const rotateInterpolate = rotateAnimation.interpolate({
        inputRange:[0,1],
        outputRange:["0deg","45deg"],
    });

    const animatedStyle = {
        transform:[{rotate:rotateInterpolate}], 
    }
    
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.Menu,{bottom:PaginaNota}]}>
                <TouchableOpacity onPress={()=>props.setPagina("PaginaNotas")}>
                    <AntDesign name="form" size={24} color="black" />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.Menu,{bottom:PaginaLista,right:PaginaLista}]}>
                <TouchableOpacity onPress={()=>props.setPagina("PaginaLista")}>
                    <AntDesign name="profile" size={24} color="black" />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.Menu,{right:PaginaTerafas}]}>
                <TouchableOpacity onPress={()=>props.setPagina("PaginaTarefas")}>
                    <AntDesign name="tool" size={24} color="black" />
                </TouchableOpacity>
            </Animated.View>
                <TouchableOpacity
                    style={[styles.Menu, {width:56,height:56,borderRadius:28,bottom:20,right:20}]}
                    onPress={()=>{Menu === false ? AbrirMenu() : FecharMenu()}}
                    activeOpacity={0.9}
                >
                <Animated.View style={[animatedStyle]} >
                    <AntDesign name="plus" size={40} color="black" />
                </Animated.View>
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
    container:{
        flex:1
    },
    Menu:{
        position:"absolute",
        bottom:25,
        right:25,
        paddingTop:1,
        borderRadius:23,
        width:46,
        height:46,
        backgroundColor:"rgb(255,203,119)",
        elevation:3,
        justifyContent:"center",
        alignItems:"center"
    }
})