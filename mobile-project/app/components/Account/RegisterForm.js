import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/Validation'
import firebase from 'firebase'
import {useNavigation} from '@react-navigation/native'

export default function RegsiterForm(props){
    const {toastRef} = props
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setshowRepeatPassword] = useState(false) 
    const [formData, setFormData] = useState(defaultFormValues())
    const navigation = useNavigation()

    const onSubmit = () =>{
        if(formData.email.length===0||formData.password.length===0||formData.repeatpassword.length===0){
            toastRef.current.show({
               type: 'error',
               position: 'top',
               text1: 'Empty',
               text2: 'Todos los campos son requeridos',
               visibilityTime: 3000,
           });
        } else if (!validateEmail(formData.email)){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Email',
                text2: 'El Email no es correcto',
                visibilityTime: 3000,
            });
        } else if (formData.password !== formData.repeatpassword){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Password',
                text2: 'Las contraseñas deben ser idénticas',
                visibilityTime: 3000,
            });
        } else if (formData.password.length < 6){
            toastRef.current.show({
                type: 'error',
                position: 'top',
                text1: 'Password',
                text2: 'El password debe tener minimo 6 caracteres',
                visibilityTime: 3000,
            });
        } else{
            firebase
            .auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then((response)=>{
                    navigation.navigate('accounts')
            })
            .catch(()=>{
                toastRef.current.show({
                    type: 'error',
                    position: 'top',
                    text1: 'Cuenta',
                    text2: 'Este correo ya ha sido registrado',
                    visibilityTime: 3000,
                });
            })
        }
    }

    const onChange = (e, type) =>{
        setFormData({ ...formData, [type]: e.nativeEvent.text})
    }

    return(
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo Electrónico'
                containerStyle={styles.inputForm}
                onChange={(e)=>onChange(e, 'email')}
                rightIcon={<Icon type='material-community' name='at' iconStyle={styles.iconRight}/>}
            />
            <Input
                placeholder='Contraseña'
                containerStyle={styles.inputForm}
                onChange={(e)=>onChange(e, 'password')}
                password={true}
                secureTextEntry={showPassword ? false : true}
                rightIcon={<Icon 
                    type='material-community' 
                    name={showPassword ?'eye-off-outline' : 'eye-outline'} 
                    iconStyle={styles.iconRight}
                    onPress={()=> setShowPassword(!showPassword)}
            />}
            />
            <Input
                placeholder='Repetir Contraseña'
                containerStyle={styles.inputForm}
                onChange={(e)=>onChange(e, 'repeatpassword')}
                password={true}
                secureTextEntry={showRepeatPassword ? false : true}
                rightIcon={<Icon 
                    type='material-community'
                    name={showRepeatPassword ?'eye-off-outline' : 'eye-outline'} 
                    iconStyle={styles.iconRight}
                    onPress={()=> setshowRepeatPassword(!showRepeatPassword)}
            />}
            />
            <Button
                title='Únete'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
        </View>
    )
}

function defaultFormValues(){
    return{
        email: '',
        password: '',
        repeatpassword: ''
    }
}

const styles= StyleSheet.create({
    formContainer:{
        marginTop: 30
    },
    inputForm:{
        width: '100%',
        marginTop: 20
    },
    btnContainerRegister:{
        marginTop: 20,
        width: '95%'
    },
    btnRegister:{
        backgroundColor:'#00a680'
    },
    iconRight:{
        color: '#c1c1c1'
    }
})