import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import {
    HOME
} from '../constants/routeNames';
import LoginScreen from '../screens/LoginScreeen';
import RegisterScreen from '../screens/RegisterScreen'
//screens;
import HomeScreen from '../screens/HomeScreen';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={HOME} component={HomeScreen}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator