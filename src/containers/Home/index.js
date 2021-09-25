import { CommonActions } from '@react-navigation/routers';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../redux/user/actions';

const Home = ({ navigation }) => {

    const user = useSelector(state => state.auth);

    const dispatch = useDispatch()
    console.log('got here');

    const logout = () => {
        dispatch(userActions.logout())
        navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'Login' }
            ],
        }))
    }
    return (
        <View>
            <TouchableOpacity onPress={() => logout()}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonLabel}>Log out</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
        borderRadius: 25,
        backgroundColor: "#00e3cf",
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    }
})

export default Home