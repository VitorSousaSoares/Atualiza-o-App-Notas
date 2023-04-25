import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Image } from 'react-native';
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ButtonFab from './componentes/ButtomFab';
import NemuButton from './componentes/NemuButton';
import NemuButtoLista from './componentes/NemuButtoLista';
import NemuButtoTarefa from './componentes/NemuButtoTarefa'
import Add from './componentes/ButtomAdd';
import Edit from './componentes/ButtomEdit'
import Titulo from './componentes/Titulo';
import Reset from './componentes/reset';
import ModalOrçamento from './componentes/ModalOrçamento'
import Total from './componentes/Total'
import Resta from './componentes/Resta'
import EditItemLista from './componentes/ButtomEditItemLista'
import EditItemTarefa from './componentes/ButtonEditItemTarefa'


import PaginaNotas from './componentes/PaginaNotas';
import PaginaAddNotas from './componentes/PaginaAddNota';
import PaginaEditNota from './componentes/PaginaEditNota';
import PaginaAddLista from './componentes/PaginaAddLista';
import PaginaAddTarefas from './componentes/PaginaAddTarefas';
import PaginaEditLista from './componentes/PaginaEditLista';
import PaginaEditTarefa from './componentes/PaginaEditTarefa';



export default function App() {
  const [Nota,setNota] = useState([""])
  const [Pagina,setPagina] = useState("HOME")
  const [Tipo,setTipo] = useState("")
  const [Nome,setNome] = useState("")
  const [Cor,setCor] = useState("rgb(255,203,119)")
  const [ConteudoNota,setConteudoNota] = useState("")
  const [Item,setItem] = useState("")
  const [Local,setLocal] = useState("")
  const [Quantidade,setQuantidade] = useState("")
  const [Valor,setValor] = useState("")
  const [Carinho,setCarinho] = useState("0")
  const [Orçamento,setOrçamento] = useState("0")
  const [Dia,setDia] = useState("0")
  const [Hora,setHora] = useState("0")
  const [Concluido,setConcluido] = useState("")
  const [Id,setId] = useState("")
  const [IdItem,setIdItem] = useState ("")
  const [ConteudoData,setConteudoData] = useState("")
  const [Tt,setTt] = useState("0")


  const getNota = async () => {
    try {
      const caregarNota = await AsyncStorage.getItem('@Nota')
      return caregarNota != null ? setNota(JSON.parse(caregarNota)) : null;
      
    } catch(e) {
    }
  }
  useEffect(()=>{
    {getNota()}
  },[])

  const atualizar= (pagina) =>{
    setPagina(pagina)
  }

  if (Pagina ==="HOME") {
    return (
      <View style={styles.container}>
        <Titulo 
          Tipo = "LogoIcone" 
          Titulo = "HOME" 
          setPagina={setPagina}
          // icone ="exclamationcircle"
          ir = "PaginaInfo"
        />
        {/* <Reset setNota={setNota}/> */}
        <Image style={styles.Img} source={require("./componentes/T1.png")}/>
        <ButtonFab setPagina={setPagina}/>
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaInfo") {
    return (
      <View style={styles.container}>
        <Titulo 
          Tipo = "LogoIcone" 
          Titulo = "INFORMAÇÃO" 
          setPagina={setPagina}
          icone = "home"
          ir = "HOME" 
        />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaNotas") {
    return (
      <View style={styles.container}>
        <Titulo Tipo = "TXT" Titulo = "NOTAS" />
        <PaginaNotas
          Nota={Nota}
          setNota = {setNota}
          setId={setId}
          Id={Id}
          setConteudoData = {setConteudoData}
          setPagina = {setPagina}
          Tipo= "Nota"
          />
        <NemuButton 
          setPagina={setPagina}
          ir = "HOME"
          add = "PaginaAddNota"
          />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaAddNota") {
    return (
      <View style={styles.container}>
        <Titulo 
          Tipo = "iconTXTicon" 
          Titulo = "ADD NOTA" 
          voltar = "PaginaNotas"
          Cor = {Cor}
          setCor = {setCor}
          setPagina = {setPagina}
          />
        <PaginaAddNotas
          setNome = {setNome}
          setConteudoNota={setConteudoNota}
          />
        <Add
          Nota={Nota}
          Cor = {Cor}
          Nome={Nome}
          ConteudoNota={ConteudoNota}
          Tipo = "Nota"
          setTipo ={setTipo}
          setNota={setNota}
          setCor = {setCor}
          setPagina={setPagina}
          setNome={setNome}
          setConteudoNota={setConteudoNota}
          />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaEditNota") {
    return (
      <View style={styles.container}>
        <Titulo 
          Tipo = "TXTVoltaLista" 
          ir = "PaginaNotas"
          Titulo ={Nota[Id]["Nome"]}
          Cor = {Cor}
          setCor = {setCor}
          setPagina = {setPagina}
          icone ="back"
          Id = {Id}
          Nota = {Nota}
          />
        <PaginaEditNota
          Nota = {Nota}
          Id={Id}
          setNota = {setNota}
          setId = {setId}
          setConteudoNota = {setConteudoNota} 
          />
        <Edit
          Id = {Id}
          Nota={Nota}
          ConteudoNota = {ConteudoNota} 
          setNota={setNota}
          setPagina={setPagina}
          setNome={setNome}
          setId = {setId}
          setConteudoNota={setConteudoNota}
          Tipo = "Nota"
          />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaLista") {
    return (
      <View style={styles.container}>
        <Titulo Tipo = "TXT" Titulo = "LISTA" />
        <PaginaNotas
          Nota={Nota}
          setNota = {setNota}
          setId={setId}
          Id={Id}
          setConteudoData = {setConteudoData}
          setPagina = {setPagina}
          Tipo= "Lista"
          />
        <NemuButtoLista
          Tipo= "Lista"
          setPagina={setPagina}
          ir = "HOME"
          add = "PaginaAddLista"
          Nota={Nota}
          setNota = {setNota}
          setId={setId}
          setNome={setNome}
          Nome={Nome}
          setCor={setCor}
          Cor={Cor}
          setOrçamento ={setOrçamento}
          Orçamento = {Orçamento}
          />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaTarefas") {
    return (
      <View style={styles.container}>
        <Titulo Tipo = "TXT" Titulo = "TAREFAS" />
        <PaginaNotas
          Nota={Nota}
          setNota = {setNota}
          setId={setId}
          Id={Id}
          setConteudoData = {setConteudoData}
          setPagina = {setPagina}
          Tipo= "Tarefas"
          />
        <NemuButtoTarefa
          Tipo= "Tarefas"
          setPagina={setPagina}
          ir = "HOME"
          add = "PaginaAddTarefa"
          Nota={Nota}
          setNota = {setNota}
          setId={setId}
          setNome={setNome}
          Nome={Nome}
          setCor={setCor}
          Cor={Cor}
          />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaVerItens") {
    return (
      <View style={styles.container}>
        <Titulo 
          Tipo = "TXT" 
          Titulo = {Nota[Id]["Nome"]} 
        />
        <PaginaNotas
          Nota={Nota}
          setNota = {setNota}
          setId={setId}
          Id={Id}
          setConteudoData = {setConteudoData}
          setPagina = {setPagina}
          Tipo= "Itens"
          setIdItem = {setIdItem}
          />
        <View style={styles.BOXCalc}>
          <View style={styles.Orçamento}>
            <ModalOrçamento
              Nota={Nota}
              setNota = {setNota}
              setId={setId}
              Id={Id}
              Orçamento = {Orçamento}
              setOrçamento = {setOrçamento}
            />
            <Total 
              Nota={Nota} 
              Id={Id}
              Tt = {Tt}
              setTt = {setTt}
            />
          </View>
          <Resta
            Nota={Nota} 
            Id={Id}
            Tt = {Tt}
            setTt = {setTt}
          />
        </View>    
        <NemuButton 
          setPagina={setPagina}
          ir = "PaginaLista"
          add = "PaginaAddLista"
        />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaVerTarefas") {
    return (
      <View style={styles.container}>
        <Titulo 
          Tipo = "TXT" 
          Titulo = {Nota[Id]["Nome"]} 
        />
        <PaginaNotas
          Nota={Nota}
          setNota = {setNota}
          setId={setId}
          Id={Id}
          setPagina = {setPagina}
          Tipo= "ItensTarefa"
          setIdItem = {setIdItem}
          />   
        <NemuButton 
          setPagina={setPagina}
          ir = "PaginaTarefas"
          add = "PaginaAddTarefa"
        />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaAddLista") {
    return (
      <View style={styles.container}>
        <Titulo 
          Tipo = "TXTVoltaLista" 
          Titulo = {Nota[Id]["Nome"]}
          setPagina = {setPagina}
          icone ="back"
          ir = "PaginaVerItens"
          setNome = {setNome} 
          Id = {Id}
          Nota = {Nota}
        />
        <PaginaAddLista
          setQuantidade={setQuantidade}
          setItem={setItem}
          setValor={setValor}
          setLocal={setLocal}
          setCarinho={setCarinho}
          Carinho={Carinho}
          Valor={Valor}
        />
        <Add
          Id={Id}
          Nota={Nota}
          Cor = {Cor}
          Nome={Nome}
          Item={Item}
          Quantidade={Quantidade}
          Valor={Valor}
          Local={Local}
          Carinho={Carinho}
          setNota={setNota}
          setCor = {setCor}
          setPagina={setPagina}
          setNome={setNome}
          setItem={setItem}
          setQuantidade={setQuantidade}
          setValor={setValor}
          setLocal={setLocal}
          setCarinho={setCarinho}
          setId={setId}
          Tipo = "Lista"
        />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaAddTarefa") {
    return (
      <View style={styles.container}>
        <Titulo 
          Tipo = "TXTVoltaLista" 
          Titulo = {Nota[Id]["Nome"]}
          setPagina = {setPagina}
          icone ="back"
          ir = "PaginaVerTarefas"
          setNome = {setNome} 
          Id = {Id}
          Nota = {Nota}
        />
        <PaginaAddTarefas
          setItem={setItem}
          setLocal={setLocal}
          setDia={setDia}
          setHora={setHora}
          setConcluido={setConcluido}
          Dia={Dia}
          Hora={Hora}
          Concluido={Concluido}
        />
        <Add
          Id={Id}
          Nota={Nota}
          Cor = {Cor}
          Nome={Nome}
          Item={Item}
          Hora={Hora}
          Dia={Dia}
          Local={Local}
          Concluido={Concluido}
          setNota={setNota}
          setCor = {setCor}
          setPagina={setPagina}
          setNome={setNome}
          setItem={setItem}
          setHora={setHora}
          setDia={setDia}
          setLocal={setLocal}
          setConcluido={setConcluido}
          setId={setId}
          Tipo = "Tarefas"
        />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaEditItem") {
    return (
      <View style={styles.container}>
        <Titulo 
          Tipo = "TXTVoltaLista" 
          Titulo = {Nota[Id].Conteudo[IdItem].Item}
          setPagina = {setPagina}
          icone ="back"
          ir = "PaginaVerItens"
          Id = {Id}
          Nota = {Nota}
        />
        <PaginaEditLista
          setQuantidade={setQuantidade}
          setItem={setItem}
          setValor={setValor}
          setLocal={setLocal}
          setCarinho={setCarinho}
          Carinho={Carinho}
          Valor={Valor}
          Nota = {Nota}
          Id = {Id}
          IdItem = {IdItem}
        />
        < EditItemLista
          IdItem = {IdItem}
          Id={Id}
          Nota={Nota}
          Cor = {Cor}
          Nome={Nome}
          Item={Item}
          Quantidade={Quantidade}
          Valor={Valor}
          Local={Local}
          Carinho={Carinho}
          setNota={setNota}
          setCor = {setCor}
          setPagina={setPagina}
          setNome={setNome}
          setItem={setItem}
          setQuantidade={setQuantidade}
          setValor={setValor}
          setLocal={setLocal}
          setCarinho={setCarinho}
          setId={setId}
          Tipo = "Lista"
        />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="PaginaEditTarefa") {
    return (
      <View style={styles.container}>
        <Titulo 
          Tipo = "TXTVoltaLista" 
          Titulo = {Nota[Id].Conteudo[IdItem].Item}
          setPagina = {setPagina}
          icone ="back"
          ir = "PaginaVerTarefas"
          Id = {Id}
          Nota = {Nota}
        />
        <PaginaEditTarefa
          setHora={setHora}
          setItem={setItem}
          setDia={setDia}
          setLocal={setLocal}
          setConcluido={setConcluido}
          Nota = {Nota}
          Concluido={Concluido}
          Hora={Hora}
          Dia = {Dia}
          Id = {Id}
          IdItem = {IdItem}
        />
        < EditItemTarefa
          IdItem = {IdItem}
          Id={Id}
          Nota={Nota}
          Cor = {Cor}
          Nome={Nome}
          Item={Item}
          Hora={Hora}
          Dia={Dia}
          Local={Local}
          Concluido={Concluido}
          setNota={setNota}
          setCor = {setCor}
          setPagina={setPagina}
          setNome={setNome}
          setItem={setItem}
          setHora={setHora}
          setDia={setDia}
          setLocal={setLocal}
          setConcluido={setConcluido}
          setId={setId}
          Tipo = "Tarefas"
        />
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="AtualizarLista") {
    return (
      <View style={styles.container}>
        {
          atualizar("PaginaVerItens")
        }
        {/* <Titulo Tipo = "TXT" Titulo = "TAREFAS" /> */}
        <StatusBar hidden />
      </View>
    );  
  }
  if (Pagina ==="AtualizarTarefa") {
    return (
      <View style={styles.container}>
        {
          atualizar("PaginaVerTarefas")
        }
        {/* <Titulo Tipo = "TXT" Titulo = "TAREFAS" /> */}
        <StatusBar hidden />
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(254,249,239)',
  },
  Img:{
    width: 350,
    height:350,
    alignSelf:"center",
    marginTop:30
  },
  Orçamento:{
    paddingBottom:3,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  BOXCalc:{
    paddingTop:8,
    paddingBottom:12,
    paddingLeft:6,
    paddingRight:6,
    backgroundColor:'rgba(254,109,115,0.5)'
  }
});
