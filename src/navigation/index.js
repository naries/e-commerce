import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'

const Stack = createStackNavigator()

export default () => {
    
    
    const token = useSelector(state => state.auth.data.token)
    
    useEffect(() => {
        console.log(token)
    })

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={token === "" ? 'Home': 'Login'} screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}