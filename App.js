import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AuthStack from './src/RootStack/AuthStack'
import MainTab from './src/RootStack/MainTab'

const RootStack = createNativeStackNavigator()
const App = () => {
  return (
   <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown:false}}>
        <RootStack.Screen name="AuthStack" component={AuthStack}/>
        <RootStack.Screen name="MainTab" component={MainTab}/>
      </RootStack.Navigator>
   </NavigationContainer>
  )
}

export default App

