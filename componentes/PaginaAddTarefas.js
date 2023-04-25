import { StyleSheet,TextInput, View,Text,TouchableOpacity,Platform  } from 'react-native';
import ImputAdd from './ImputAdd';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';


export default function App(props) {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(Platform.OS === 'android')
        setShow(false);
        setDate(currentDate);

        if (mode ==="date") {
            
            let temDate = new Date(currentDate);
            let fDate = temDate.getDate()+"/"+(temDate.getMonth()+1)+"/"+temDate.getFullYear();
            let dia = fDate.toString();
            props.setDia(fDate)
        }else{
            let temDate = new Date(currentDate);
            let fTime =  temDate.getHours()+":" + temDate.getMinutes();
            let hora = fTime.toString();
            props.setHora(fTime)

        }
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

  return(
    <View style={styles.container}>
      <ImputAdd
        tag="Item"
        linhas={true}
        foco={false}
        setTXT={props.setItem}
      />
      <ImputAdd
        tag="Local"
        linhas={true}
        foco={false}
        setTXT={props.setLocal}
      />

    <View style={styles.BOXDH}>
        <TouchableOpacity
            onPress={()=> showMode("date")}
            style={styles.DataHora}
        >
            <Text><AntDesign name="calendar" size={24} color="black" style={styles.DataHoraTXT}/></Text>
            <Text style={styles.DataHoraTXT}>{props.Dia}</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.DataHora}
            onPress={()=> showMode("time")}
        >
            <AntDesign name="clockcircleo" size={24} color="black" style={styles.DataHoraTXT}/>
            <Text style={styles.DataHoraTXT}>{props.Hora}</Text>
        </TouchableOpacity>
        {
            show && (
                <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )
        }
    </View>



      <View style={styles.BOXSel}>
        <Text style={styles.TXTBOXPIC}>Tarefa concluida:</Text>
        <View style={styles.BOXPIC}>
            <Picker
                selectedValue={props.Concluido}
                onValueChange={(itemValue, itemIndex) =>
                props.setConcluido(itemValue)
                
            }>
                <Picker.Item label="NÃO" value="0" style={styles.TXTPIC}/>
                <Picker.Item label="SIM" value="1" style={styles.TXTPIC}/>
            </Picker>
        </View>
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
  container:{
    flex:1
  },
  BOXSel:{
    marginTop:8,
    width:"90%",
    alignSelf:"center",
    backgroundColor:"rgba(255,255,255,0.7)",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  BOXPIC:{
      width:120
  },
  TXTPIC:{
      fontSize:14
  },
  TXTBOXPIC:{
      textAlignVertical:"center",
      paddingLeft:8
  },
  Valor:{
    marginTop:8,
    paddingTop:"2%",
    paddingBottom:"2%",
    paddingLeft:"5%",
    paddingRight:"5%",
    backgroundColor:"rgba(255,255,255,0.7)",
    width:"90%",
    alignSelf:"center"
  },
  BOXDH:{
    backgroundColor:"rgba(255,255,255,0.7)",
    width:"90%",
    flexDirection:"row",
    marginBottom:5,
    marginTop:8,
    justifyContent:"space-between",
    alignSelf:"center"

},
DataHora:{
    backgroundColor:"rgba(255,255,255,0.7)",
    width:"48%",
    alignItems:"center",
    borderRadius:10,
    paddingBottom:8,
    paddingTop:8
},
DataHoraTXT:{
    padding:2,
}
});