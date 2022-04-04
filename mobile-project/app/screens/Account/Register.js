import React, {useRef} from "react"
import { StyleSheet, View, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RegsiterForm from "../../components/Account/RegisterForm"
import Toast from 'react-native-toast-message'

export default function Register(){
    const toastRef = useRef()
    return(
        <KeyboardAwareScrollView>
                <Image
                    source={require('../../../assets/img/LogoRest2.png')}
                    resizeMode='contain'
                    style={styles.logo}
                />
            <View style = {styles.viewForms}>
                <RegsiterForm toastRef={toastRef}/>
            </View>
            <Toast ref={toastRef}/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    viewForms:{
        marginRight: 40,
        marginLeft: 40
    },
    logo:{
        width: '100%',
        height: 350,
        marginTop: 10
    }
})