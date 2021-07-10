import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
const AppNavContainer = () => {
    const isLoggedIn = false

    return (
        <NavigationContainer>
            {isLoggedIn ? <HomeNavigator />  : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default AppNavContainer