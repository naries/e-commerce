import { CommonActions } from '@react-navigation/routers';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Platform, Image, ActivityIndicator, TextInput, Text, StatusBar, Keyboard} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/user/actions';
import { AvoidingBaseView } from '../../common/Stylesheet'
import logo from '../../../assets/icon.png'

const Login = props => {
    const { navigation } = props

    const dispatch = useDispatch()

    // navigation to home screen
    const auth = useSelector(state => state.auth)
    const network = useSelector(state => state.network)
    const {isLoading, loaded, data, error} = auth
    if(loaded && error === null) {
        navigation.dispatch(
            CommonActions.reset({index: 0, routes: [
                {name: 'Home'},
            ]})
        )
    }

    //validation
    const initialFormValues = {        
        // username: "johnd",
        // password: "m38rmF$"
        username: "",
        password: ""
    }

    const initialFormState = {
        usernameError: "",
        usernameIsValidated: false,
        passwordError: "",
        passwordIsValidated: "",
        formIsSubmitting: false
    }
    
    const [formValues, setFormValues]= useState({ ...initialFormValues })
    const [formState, setFormState] = useState({ ...initialFormState })

    const formHandler = {
        usernameHandler: text => {
            setFormValues({ ...formValues, username: text });
            if (!/^[a-zA-Z ]{2,30}$/.test(text)) {
              setFormState({
                ...formState,
                  usernameError: "Enter a valid username",
                  usernameIsValidated: false,
              });
              return;
            }
            setFormState({
              ...formState,
                usernameError: "",
                usernameIsValidated: true,
            });
        },
        passwordHandler: text => {
            setFormValues({...formValues, password: text})
            if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(text)) {
                setFormState({ 
                    ...formState, 
                    passwordError: "Password must contain at least one special character, a lower case, an uppercase and lowercase and a number",
                    passwordIsValidated: false
                })
                return;
            }

            if(text.length < 3){
                setFormState({ 
                    ...formState, 
                    passwordError: "Passwords must be at least 8 characters. ",
                    passwordIsValidated: false
                })
                return;
            }
            setFormState({ 
                ...formState, 
                passwordError: "", 
                passwordIsValidated: true 
            })
        },
    }

    const logout = () => {
        dispatch(userActions.logout())
        // navigation.dispatch(CommonActions.reset({
        //     index: 0,
        //     routes: [
        //         { name: 'Login' }
        //     ],
        // }))
    }

    useEffect(() => {
        logout();
    }, [])


    const loginFn = () => {
        dispatch(userActions.login({...formValues}))
    }



    const login = () => {
        //dismiss keyboard
        Keyboard.dismiss();
        
        const {usernameIsValidated, passwordIsValidated} = formState

        if(!usernameIsValidated) {
            alert('username is invalid or not provided')
            return;
        }
        if(!passwordIsValidated) {
            alert('Invalid password')
            return
        }

        if(!network.isConnected) {
            alert('No internet')
            return
        }

        loginFn();
    }


    return (
        <AvoidingBaseView
            style={styles.baseView}
            behavior={Platform.OS ==="ios" ? "padding"  : null}
            // keyboardVerticalOffset={Platform.OS ==="ios" ? Header. + 20: 0}
        >   

            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image source={logo} style={{ height: 120, width: 120}}/>
                </View>

                {isLoading && (<View style={styles.loadingView}>
                        <ActivityIndicator size="small" color="#333" />
                        <Text style={{color: '#333'}}>  Logging you in!</Text>
                </View>)}

                <TextInput
                    placeholder="Username"
                    placeholderTextColor="grey"
                    returnKeyType="next"
                    onSubmitEditing={() => pass_tn.focus()}
                    onChangeText={text => formHandler.usernameHandler(text)}
                    value={formValues.username}
                    style={styles.input}
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="grey"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    returnKeyType="done"
                    onChangeText={text => formHandler.passwordHandler(text)}
                    value={formValues.password}
                    style={styles.input}
                />

                <TouchableOpacity onPress={() => login()}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonLabel}>Log In</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </AvoidingBaseView>
    );
}

const styles = StyleSheet.create({
    baseView: {
        flex: 1,
        backgroundColor: 'white',

    },
    normalText: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold"
    },
    imageView: {
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    loadingView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        height: 40,
        color: '#333',
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 14,
        fontSize: 18
    },
    buttonContainer: {
        height: 40,
        borderRadius: 8,
        backgroundColor: "#333",
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLabel: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    }
})

export default Login;
