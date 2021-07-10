import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import {
    LANDING,
    REGISTER,
    LOGIN
} from '../constants/routeNames';
import LoginScreen from '../screens/LoginScreeen';
import RegisterScreen from '../screens/RegisterScreen'
//screens;
import Landing from '../screens/LandingScreen';

const AuthNavigator = () => {
    const HomeStack = createStackNavigator(

    );

    return (
        <HomeStack.Navigator screenOptions={{
            headerBackTitleVisible: false
        }}>
            <HomeStack.Screen name={LANDING} options={{ headerShown: false }} component={Landing}></HomeStack.Screen>
            <HomeStack.Screen name={REGISTER} component={RegisterScreen}></HomeStack.Screen>
            <HomeStack.Screen name={LOGIN} component={LoginScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default AuthNavigator