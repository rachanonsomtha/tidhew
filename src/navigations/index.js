import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import HomeNavigator from "./HomeNavigator";

const AppNavContainer = () => {
    const isLoggedIn = false

    return (
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    )
}

export default AppNavContainer