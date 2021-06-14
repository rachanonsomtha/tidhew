import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Text, TouchableOpacity } from 'react-native'
import Input from '../../components/common/Input'
import Container from '../../components/common/Container';
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';
import CustomButton from '../../components/common/CustomButton';

const LoginScreen = () => {

    const { navigate } = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Container>
            <Text style={styles.title}>Welcome to Tidhew</Text>
            <Text style={styles.subTitle}>Please login here</Text>
            <View>
                <Input
                    label="Username"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                    iconPosition="right"
                    placeholder="Enter Username"
                />
                <Input
                    label="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    icon={<Text>Show</Text>}
                    iconPosition="right"
                    placeholder="Enter Password"
                />
                <CustomButton title="Submit" primary ></CustomButton>
                <View style={styles.createSection}>
                    <Text style={styles.infoText}>Already have account ?</Text>
                    <TouchableOpacity onPress={() => navigate(REGISTER)}>
                        <Text style={styles.linkBtn}>Create account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}

export default LoginScreen
