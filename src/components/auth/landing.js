import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { LOGIN, REGISTER } from '../../constants/routeNames'
import StyledButton from '../common/StyledButton'
import Container from '../common/Container'
const Landing = () => {
    const { navigate } = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 50 }}>
                <Image
                    source={
                        require('../../assets/image/logo.png')
                    }
                    style={styles.logoImage}
                />
            </View>
            <Text style={[styles.loremText, { paddingTop: 50 }]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <View style={styles.buttonContainer}>
                <StyledButton type="primary" content={"Login"} onPress={() => {
                    navigate(LOGIN)
                }} />
                <StyledButton type="secondary" content={"Create account"} onPress={() => {
                    navigate(REGISTER)
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoImage: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    loremText: {
        paddingHorizontal: 20,
        paddingVertical: 200
    },
    buttonContainer: {
        width: '100%'
    }
})

export default Landing