import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App(props) {

    const adicionar = async () =>{
        if (props.Nome === ""){
            Alert.alert("NOME","O nome deve ser preenchido")
        }else{
            const newt = {Tipo:props.Tipo,Cor:props.Cor,Nome:props.Nome,Conteudo:{ConteudoDaNota:props.ConteudoNota}};
            const novo = [...props.Nota,newt]
            props.setNota(novo);
            try {
                const salvarNota = JSON.stringify(novo)
                await AsyncStorage.setItem('@Nota', salvarNota)
              } catch (e) {
                // saving error
              }
            
            props.setTipo("")
            props.setCor("rgb(255,203,119)")
            props.setNome("")
            props.setConteudoNota("")
            props.setPagina("PaginaNotas")
        }
    }
    const adicionarItemLista = async () =>{
        if (props.Item === ""){
            Alert.alert("NOME","O nome deve ser preenchido")
        }else{
            const NovaNota = [...props.Nota];
            
            if (NovaNota[props.Id].hasOwnProperty('Conteudo')) {
                const ValorSemFormatação = props.Valor.replace('R$', '').replace(',', '.').replace('.', '.')
                const Itens = {Item:props.Item,Local:props.Local,Valor:props.Valor,Quantidade:props.Quantidade,Carinho:props.Carinho,Total:parseFloat(((props.Quantidade)*(ValorSemFormatação)).toFixed(2))}
                const  id=props.Nota[props.Id].Conteudo.length;
                NovaNota[props.Id].Conteudo[id] =Itens
                console.log(props.Nota)
                
                
                
                try {
                    const salvarNota = JSON.stringify(NovaNota)
                    await AsyncStorage.setItem('@Nota', salvarNota)
                } catch (e) {
                    // saving error
                }
                props.setItem("")
                props.setQuantidade("")
                props.setValor("")
                props.setLocal("")
                props.setCarinho("0")  
                Alert.alert("ADICIONADO","O item " + props.Item + " foi adicinado")
                
            } else {                    
                
                const ValorSemFormatação = props.Valor.replace('R$', '').replace(',', '.').replace('.', '.')
                const Itens = [{Item:props.Item,Local:props.Local,Valor:props.Valor,Quantidade:props.Quantidade,Carinho:props.Carinho,Total:parseFloat(((props.Quantidade)*(ValorSemFormatação)).toFixed(2))}]
                NovaNota[props.Id].Conteudo = Itens;
                props.setNota(NovaNota)
                console.log(props.Nota)
                
                try {
                    const salvarNota = JSON.stringify(NovaNota)
                    await AsyncStorage.setItem('@Nota', salvarNota)
                } catch (e) {
                    // saving error
                }
                props.setItem("")
                props.setQuantidade("")
                props.setValor("")
                props.setLocal("")
                props.setCarinho("0")                    
                Alert.alert("ADICIONADO","O item " + props.Item + " foi adicinado")
            }
        }
    }
    const adicionarTarefas = async () =>{
        if (props.Item === ""){
            Alert.alert("NOME","O nome deve ser preenchido")
        }else{
            const NovaNota = [...props.Nota];
            
            if (NovaNota[props.Id].hasOwnProperty('Conteudo')) {
                const Itens = {Item:props.Item,Local:props.Local,Concluido:props.Concluido,Hora:props.Hora,Dia:props.Dia}
                const  id=props.Nota[props.Id].Conteudo.length;
                NovaNota[props.Id].Conteudo[id] =Itens
                console.log(props.Nota)
                
                
                
                try {
                    const salvarNota = JSON.stringify(NovaNota)
                    await AsyncStorage.setItem('@Nota', salvarNota)
                } catch (e) {
                    // saving error
                }
                props.setItem("")
                props.setDia("0")
                props.setHora("0")
                props.setLocal("")
                props.setConcluido("0")  
                Alert.alert("ADICIONADO","O item " + props.Item + " foi adicinado")
                
            } else {                                    
                const Itens = [{Item:props.Item,Local:props.Local,Concluido:props.Concluido,Hora:props.Hora,Dia:props.Dia}]
                NovaNota[props.Id].Conteudo = Itens;
                props.setNota(NovaNota)
                console.log(props.Nota)
                
                try {
                    const salvarNota = JSON.stringify(NovaNota)
                    await AsyncStorage.setItem('@Nota', salvarNota)
                } catch (e) {
                    // saving error
                }
                props.setItem("")
                props.setDia("0")
                props.setHora("0")
                props.setLocal("")
                props.setConcluido("0")                      
                Alert.alert("ADICIONADO","O item " + props.Item + " foi adicinado")
            }
        }
    }

    if (props.Tipo === "Nota") {        
        return(
            <View >
                <TouchableOpacity 
                    style={styles.TXTBTN}
                    onPress={()=>adicionar(props.tipo)}
                >
                    <Text style={styles.TXT}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else if (props.Tipo === "Lista"){
        return(
            <View >
                <TouchableOpacity 
                    style={styles.TXTBTN}
                    onPress={()=>adicionarItemLista(props.tipo)}
                >
                    <Text style={styles.TXT}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
        )
    }
    else if (props.Tipo === "Tarefas"){
        return(
            <View >
                <TouchableOpacity 
                    style={styles.TXTBTN}
                    onPress={()=>adicionarTarefas(props.tipo)}
                >
                    <Text style={styles.TXT}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
        )
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

    TXTBTN:{
        backgroundColor: "rgb(255,203,119)",
        padding:12,
        alignItems:"center",
    },
    TXT:{
        fontSize:18
    }
});


