import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSignIn } from '../redux/authSlice';


const LoginScreen = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            const user = { 
                isLoggedIn: true,
                email: 'jdoe@test.com',
                userName: 'johnDoe'
            };
    
            dispatch(setSignIn(user));
        }, 2000);
        
    }

    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 20, fontSize: 15 }}>Login Screen</Text>
            <TouchableOpacity onPress={handleLogin} style={styles.btn}>
                {
                    loading?<ActivityIndicator color={'#fff'} />:<Text style={styles.text}>Sign In</Text>
                } 
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btn: {
        backgroundColor: 'blue',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})