import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Input, Icon, Button } from 'react-native-elements'
import { validateEmail } from '../../utils/Validation'

export default function RegsiterForm(){
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setshowRepeatPassword] = useState(false) 
    const [formData, setFormData] = useState(defaultFormValues())  

    const onSubmit = () =>{
        if(formData.email.length===0||formData.password.length===0||formData.repeatpassword.length===0){
            console.log('Todos los campos son requeridos')
        } else if (!validateEmail(formData.email)){
            console.log('El email no es correcto')
        } else if (formData.password !== formData.repeatpassword){
            console.log('Las contraseñas deben ser idénticas')
        } else if (formData.password.length < 6){
            console.log('El password debe tener minimo 6 caracteres')
        } else{
            console.log('Todo Ok')
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