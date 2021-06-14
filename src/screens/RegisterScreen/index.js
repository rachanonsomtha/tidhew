import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import Input from '../../components/common/Input'
import Container from '../../components/common/Container'
import CustomButton from '../../components/common/CustomButton'
import { useNavigation } from '@react-navigation/core'
import { LOGIN } from '../../constants/routeNames'
const RegisterScreen = (
    { onSubmit,
        onChange,
        form,
        errors,
        error,
        loading
    }
) => {

    const { navigate } = useNavigation()
    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}>
                {/* <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} /> */}
                <View>
                    <Text style={styles.title}>Welcome to Tidhew</Text>
                    <Text style={styles.subTitle}>Create a free account</Text>
                    <View style={styles.form}>
                        <Input
                            label="Username"
                            iconPosition="right"
                            placeholder="Enter Username"
                            onChangeText={(value) => {
                                onChange({ name: "userName", value })
                            }}
                        />
                        <Input
                            label="First name"
                            iconPosition="right"
                            placeholder="Enter First name"
                            onChangeText={(value) => {
                                onChange({ name: "firstName", value })
                            }}
                        />
                        <Input
                            label="Last name"
                            iconPosition="right"
                            placeholder="Enter Last name"
                            onChangeText={(value) => {
                                onChange({ name: "lastName", value })
                            }}
                        />
                        <Input
                            label="Email"
                            iconPosition="right"
                            placeholder="Enter Email"
                            onChangeText={(value) => {
                                onChange({ name: "email", value })
                            }}
                        />

                        <Input
                            label="Password"
                            secureTextEntry={true}
                            icon={<Text>Show</Text>}
                            iconPosition="right"
                            placeholder="Enter Password"
                            onChangeText={(value) => {
                                onChange({ name: "password", value })
                            }}
                        />
                        <CustomButton
                            loading={loading}
                            disabled={loading}
                            title="Submit"
                            primary
                            onPress={onSubmit}
                        />
                        <View style={styles.createSection}>
                            <Text style={styles.infoText}>Already have account ?</Text>
                            <TouchableOpacity onPress={() => navigate(LOGIN)}>
                                <Text style={styles.linkBtn}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default RegisterScreen
