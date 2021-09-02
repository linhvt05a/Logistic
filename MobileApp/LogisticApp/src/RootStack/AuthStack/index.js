import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack'

import {ROUTES} from '../../constants'

import Getstarted from '../../screens/Started'
import SignIn from '../../screens/SignIn'
import SignUp from '../../screens/SignUp'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTES.GET_STARTED}>
            <Stack.Screen name={ROUTES.GET_STARTED} component={Getstarted}/>
            <Stack.Screen name={ROUTES.SIGN_UP} component={SignUp}/>
            <Stack.Screen name={ROUTES.SIGN_IN} component={SignIn}/>
        </Stack.Navigator>
    )
}

export default AuthStack

