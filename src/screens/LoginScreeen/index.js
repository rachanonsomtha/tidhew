import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Text, TouchableOpacity, Button } from 'react-native'
import Input from '../../components/common/Input'
import Container from '../../components/common/Container';
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';
import CustomButton from '../../components/common/CustomButton';
import { useForm, Controller } from 'react-hook-form';

const LoginScreen = () => {

    const [isShowPassword, setIsShowPassword] = useState(true)
    const navigation = useNavigation();

    const triggerPasswordHidden = () => {
        setIsShowPassword(!isShowPassword)
    }
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const onSubmit = data => {
        //login here
        console.log(data);
    };

    return (
        <Container>
            <Text style={styles.title}>Welcome to Tidhew</Text>
            <Text style={styles.subTitle}>Please login here</Text>
            <View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Username"
                            onChangeText={value => onChange(value)}
                            onBlur={onBlur}
                            value={value}
                            iconPosition="right"
                            placeholder="Enter Username"
                            error={errors.username?.type === 'required' && "Username is required"}
                        />
                    )}
                    name="username"
                    rules={{ required: true }}
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            label="Password"
                            secureTextEntry={isShowPassword}
                            onChangeText={value => onChange(value)}
                            onBlur={onBlur}
                            value={value}
                            icon={
                                value ?
                                    <TouchableOpacity onPress={triggerPasswordHidden}>
                                        <Text>{isShowPassword ? "Show" : "Hide"}</Text>
                                    </TouchableOpacity> : <></>
                            }
                            iconPosition="right"
                            placeholder="Enter Password"
                            error={errors.password?.type === 'required' && "Password is required"}
                        />
                    )}
                    name="password"
                    rules={{ required: true }}
                />
                <CustomButton title="Submit" onPress={handleSubmit(onSubmit)} primary></CustomButton>
                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Already have account ?</Text>
                    <TouchableOpacity onPress={() => navigation.replace(REGISTER)}>
                        <Text style={styles.linkBtn}>Create account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container >
    )
}

export default LoginScreen
