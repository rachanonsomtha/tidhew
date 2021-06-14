import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({ onChangeText,
    icon,
    iconPosition,
    style,
    value,
    label, error, ...props }) => {

    const [focused, setfocused] = useState(false)
    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition == "left") {
                return 'row'
            } else {
                return 'row-reverse'
            }
        }
    }

    const getBorderColor = () => {
        if (focused) {
            return colors.primary
        }
        if (error) {
            return colors.danger
        } else {
            return colors.grey
        }
    }
    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={[styles.wrapper, { alignItems: icon ? "center" : "baseline", borderColor: getBorderColor(), flexDirection: getFlexDirection() }]}>
                <View>
                    {icon && icon}
                </View>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                    onFocus={() => setfocused(true)}
                    onBlur={() => setfocused(false)}
                    {...props}
                />
            </View>
            {error && <Text style={styles.error}>{error}</Text>}
        </View >
    )
}

export default Input
