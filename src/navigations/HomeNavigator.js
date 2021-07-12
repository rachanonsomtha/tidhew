import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import {
    HOME,
    VENDORDETAIL,
    FOODDETAIL
} from '../constants/routeNames';
import LoginScreen from '../screens/LoginScreeen';
import RegisterScreen from '../screens/RegisterScreen'
//components
import FoodDetail from '../screens/foodDetail';

//screens;
import HomeScreen from '../screens/HomeScreen';
import VendorDetail from '../screens/VendorDetail';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={HOME} options={{ headerShown: false }} component={HomeScreen}></HomeStack.Screen>
            <HomeStack.Screen name={VENDORDETAIL} component={VendorDetail}></HomeStack.Screen>
            <HomeStack.Screen name={FOODDETAIL} options={{ headerShown: false }} component={FoodDetail}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator