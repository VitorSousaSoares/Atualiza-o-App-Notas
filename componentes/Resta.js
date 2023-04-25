import { StyleSheet, Text,View } from 'react-native';


export default function App(props) {
    function total() {
        const ValorSemFormatação = props.Nota[props.Id].Orçamento.replace('R$', '').replace(',', '.').replace('.', '.')
        const Total = parseFloat(((ValorSemFormatação)-(props.Tt)).toFixed(2))

        return(
            <Text>R$: {Total}</Text>
        )
    }

    return(
        <View >
            <Text>Resta: {total()}</Text>
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
})