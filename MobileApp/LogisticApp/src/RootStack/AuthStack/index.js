import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {ROUTES} from '../../constants'

import Getstarted from '../../screens/Started'
import SignIn from '../../screens/SignIn'
import SignUp from '../../screens/SignUp'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={ROUTES.GET_STARTED} component={Getstarted} options={{title:"", headerStyle:{backgroundColor:'transparent',}}}/>
            <Stack.Screen name={ROUTES.SIGN_UP} component={SignUp} options={{title:""}}/>
            <Stack.Screen name={ROUTES.SIGN_IN} component={SignIn} options={{headerShown: false, title:""}}/>
        </Stack.Navigator>
    )
}

export default AuthStack

