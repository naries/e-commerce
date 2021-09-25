import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView } from 'react-native';
import Navigation from './navigation'

export const Router = () => {
    return (
        <>
            <SafeAreaView style={{backgroundColor: "#fff", flex: 1}}>
                <StatusBar style="auto" />
                <Navigation />
            </SafeAreaView>
        </>
    )
}