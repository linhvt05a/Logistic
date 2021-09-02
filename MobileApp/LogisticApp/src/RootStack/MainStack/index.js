import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { ROUTES } from '../../constants'

import Dashboard from '../../screens/Dashboard'
const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name={ROUTES.DASH_BOARD} component={Dashboard}/>
        </Stack.Navigator>
    )
}

export default MainStack

