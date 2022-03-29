import React from 'react'
import { createStackNavigator } from '@react-navigation/stack' 
import Accounts from '../screens/Account/Accounts'

const Stack = createStackNavigator()

export default function AccountsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
               name='accounts' 
               component={Accounts}
               options={{title:"Cuenta"}}
            />
        </Stack.Navigator>
    )

}