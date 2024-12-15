import React from 'react';
import AppNavigator from './app-navigation';
import AuthNavigator from './auth-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/authSlice';

const AppRoute = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <NavigationContainer>
            {
                isLoggedIn ? <AppNavigator /> : <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default AppRoute