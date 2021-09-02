import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ROUTES } from '../../constants'

import Dashboard from '../../screens/Dashboard'
import Settings from '../../screens/Settings'
const Tab = createBottomTabNavigator()

const MainTab = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name={ROUTES.DASH_BOARD} component={Dashboard}/>
            <Tab.Screen name={ROUTES.SETTING} component={Settings}/>
        </Tab.Navigator>
    )
}

export default MainTab

