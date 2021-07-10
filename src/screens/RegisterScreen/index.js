import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import styles from './styles'
import Input from '../../components/common/Input'
import Container from '../../components/common/Container'
import CustomButton from '../../components/common/CustomButton'
import { useNavigation } from '@react-navigation/core'
import { LOGIN } from '../../constants/routeNames'
import { useForm, Controller } from 'react-hook-form'
import { auth } from '../../config/firebase'
import colors from '../../assets/theme/colors'

const RegisterScreen = () => {

    const [isShowPassword, setIsShowPassword] = useState(true)
    const navigation = useNavigation()

    const triggerPasswordHidden = () => {
        setIsShowPassword(!isShowPassword)
    }




    const { control, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            username: "",
            password: "",
            conpassword: "",
            firstname: "",
            lastname: "",
            email: "",
        }
    })

    const isPasswordMatched = () => {
        return watch("password") == watch("conpassword")
    }

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}>
                <View>
                    <Text style={styles.title}>Welcome to Tidhew</Text>
                    <Text style={styles.subTitle}>Create a free account</Text>
                    <View style={styles.form}>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onBlur={onBlur}
                                    value={value}
                                    label="Username"
                                    iconPosition="right"
                                    placeholder="Enter Username"
                                    onChangeText={(value) => onChange(value)}
                                    error={errors.username?.type === 'required' ?
                                        "Username is required" :
                                        errors.username?.type === "minLength" && "Please entered more than 6 charactors"}
                                />
                            )}
                            name="username"
                            rules={{ required: true, minLength: 6 }}
                        />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onBlur={onBlur}
                                    label="Password"
                                    value={value}
                                    secureTextEntry={isShowPassword}
                                    icon={value ?
                                        <TouchableOpacity onPress={triggerPasswordHidden}>
                                            <Text>{isShowPassword ? "Show" : "Hide"}</Text>
                                        </TouchableOpacity> : <></>
                                    }
                                    iconPosition="right"
                                    placeholder="Enter Password"
                                    onChangeText={(value) => onChange(value)}
                                    error={errors.password?.type === 'required' ?
                                    "Password is required" :
                                    errors.password?.type === "minLength" && "Please entered more than 6 charactors"}
                                />
                            )}
                            name="password"
                            rules={{ required: true, minLength: 6 }}
                        />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onBlur={onBlur}
                                    label="Comfirm Password"
                                    secureTextEntry={true}
                                    // icon={value ?
                                    //     <TouchableOpacity onPress={triggerPasswordHidden}>
                                    //         <Text>{isShowPassword ? "Show" : "Hide"}</Text>
                                    //     </TouchableOpacity> : <></>
                                    // }
                                    value={value}
                                    iconPosition="right"
                                    placeholder="Type your password again"
                                    onChangeText={(value) => onChange(value)}
                                    error={errors.conpassword?.type === 'required'
                                        ? "Please confirmed you password" :
                                        errors.conpassword?.type === 'validate' && "Password not matched"}
                                />
                            )}
                            name="conpassword"
                            rules={{ required: true, validate: isPasswordMatched }}
                        />
                        <View
                            style={{
                                paddingVertical: 10,
                                borderBottomColor: colors.grey,
                                borderBottomWidth: 1,
                            }}
                        />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onBlur={onBlur}
                                    label="Email"
                                    value={value}
                                    iconPosition="right"
                                    placeholder="Enter Email"
                                    onChangeText={(value) => onChange(value)}
                                    error={errors.email?.type === 'required' && "Email is required"}
                                />
                            )}
                            name="email"
                            rules={{ required: true }}
                        />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onBlur={onBlur}
                                    label="First name"
                                    value={value}
                                    iconPosition="right"
                                    placeholder="Enter First name"
                                    onChangeText={(value) => onChange(value)}
                                    error={errors.firstname?.type === 'required' && "First name is required"}
                                />
                            )}
                            name="firstname"
                            rules={{ required: true }}
                        />
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    onBlur={onBlur}
                                    label="Last name"
                                    value={value}
                                    iconPosition="right"
                                    placeholder="Enter Last name"
                                    onChangeText={(value) => onChange(value)}
                                    error={errors.lastname?.type === 'required' && "Last name is required"}
                                />
                            )}
                            name="lastname"
                            rules={{ required: true }}
                        />
                        <CustomButton title="Submit" onPress={handleSubmit(onSubmit)} primary></CustomButton>
                        <View style={styles.createSection}>
                            <Text style={styles.infoText}>Already have account ?</Text>
                            <TouchableOpacity onPress={() => navigation.replace(LOGIN)}>
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
