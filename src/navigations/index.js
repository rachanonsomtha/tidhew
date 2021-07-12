import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import HomeNavigator from "./HomeNavigator";
import AuthNavigator from "./AuthNavigator";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "../features/userSlice";
import { auth } from "../config/firebase";

const AppNavContainer = () => {
    const isLoggedIn = false

    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
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
            setIsLoading(false)
        })
    }, [])
    return (

        <NavigationContainer>
            {isLoading ?
                (
                    <></>
                ) : (
                    user ? <HomeNavigator /> : <AuthNavigator />
                )
            }

        </NavigationContainer>
    )
}

export default AppNavContainer