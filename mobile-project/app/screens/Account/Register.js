import React from "react"
import { StyleSheet, View, Text, Image } from 'react-native'

export default function Register(){
    return(
        <View>
                <Image
                    source={require('../../../assets/img/LogoRest2.png')}
                    resizeMode='contain'
                    style={styles.logo}
                />
            <View style = {styles.viewForms}>
                <Text>Formulario de Registro</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewForms:{
        marginRight: 40,
        marginLeft: 40
    },
    logo:{
        width: '100%',
        height: 150,
        marginTop: 20
    }
})