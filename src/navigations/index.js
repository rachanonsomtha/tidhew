import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from 'react';
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "../features/userSlice";
import { auth } from "../config/firebase";

const AppNavContainer = () => {
    const isLoggedIn = false

    const user = useSelector(selectUser);
    const dispatch = useDispatch()

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                // user logged in
                dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                }))
            } else {
                // user logged out
                dispatch(logout())
            }
        })
    }, [])
    return (
        <NavigationContainer>
            {user ? <HomeNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default AppNavContainer