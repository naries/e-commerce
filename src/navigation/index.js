import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector } from 'react-redux'

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import DetailsScreen from './DetailsScreen'
import CheckoutScreen from './CheckoutScreen'
import SettingsScreen from './SettingsScreen'

const Stack = createStackNavigator()

export default () => {    
    
    const token = useSelector(state => state.auth.data.token)

    console.log(token);

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={!token ? 'Login': 'Home'} screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Checkout" component={CheckoutScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}