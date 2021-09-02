import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ROUTES } from '../constants'

const Getstarted = (props) => {
    return (
        <TouchableOpacity onPress={()=> props.navigation.navigate(ROUTES.SIGN_UP)}>
            <Text>fdasfsdfs</Text>
        </TouchableOpacity>
    )
}

export default Getstarted

const styles = StyleSheet.create({})
