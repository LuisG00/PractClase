import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Input, Icon, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { validateEmail } from '../../utils/Validation'
import firebase from 'firebase'

export default function LoginForm(props) {
    const {toastRef} = props
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const navigation = useNavigation()

    const onSubmit = () =>{
      if(formData.email.length===0||formData.password.length===0){
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
      }else{
        firebase
            .auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then(()=>{
              navigation.navigate('accounts')
            })
            .catch(()=>{
              toastRef.current.show({
                  type: 'error',
                  position: 'top',
                  text1: 'Cuenta',
                  text2: 'Las credenciales no son correctas',
                  visibilityTime: 3000,
              })
          })
      }
  }
    const onChange = (e, type) =>{
      setFormData({ ...formData, [type]: e.nativeEvent.text})
  }

  return (
    <View style={styles.container}>
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
            />
            }
          />
          <Button
                title='Inicia Sesión'
                containerStyle={styles.btnContainerLogin}
                buttonStyle={styles.btnLogin}
                onPress={onSubmit}
            />
    </View>
  )
}

function defaultFormValues(){
  return{
      email: '',
      password: ''
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30
  },
  inputForm:{
    width: '100%',
    marginTop: 20
  },
  btnContainerLogin:{
    marginTop: 20,
    width: '95%'
  },
  btnLogin:{
    backgroundColor:'#00a680'
  },
  iconRight:{
    color: '#c1c1c1'
  }
})