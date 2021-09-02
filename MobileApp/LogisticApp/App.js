import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AuthStack from './src/RootStack/AuthStack'
import MainStack from './src/RootStack/MainStack'

const RootStack = createNativeStackNavigator()
const App = () => {
  return (
   <NavigationContainer>
      <RootStack.Navigator initialRouteName="" screenOptions={{headerShown:false}}>
        <RootStack.Screen name="AuthStack" component={AuthStack}/>
        <RootStack.Screen name="MainStack" component={MainStack}/>
      </RootStack.Navigator>
   </NavigationContainer>
  )
}

export default App

