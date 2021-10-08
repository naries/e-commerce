import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './navigation'
import { ThemeProvider } from 'styled-components/native'
import { getData } from './redux/theme/saga/util/asyncStore';
import { themeActions } from './redux/theme/actions';

export const Router = () => {

    const theme=useSelector(state => state.theme)

    const dispatch = useDispatch()

    const selectTheme = thema => dispatch(themeActions.change_theme(thema))

    useEffect(() => {
        getData('@main-theme').then(them => {
            if(them) {
                selectTheme(them)
            } else {
                selectTheme('dark');
            }
        }).catch(e => console.log('could not fetch theme!', e))
    }, [])
    
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaView style={{backgroundColor: "#fff", flex: 1}}>
                <StatusBar style={theme.name === "light"?"dark": "light"} />
                <Navigation />
            </SafeAreaView>
        </ThemeProvider>
    )
}