import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../../assets/theme/colors'

const VerticalVendorCard = () => {
    return (
        <View style={styles.verticalVendorCard__container}>
            <View style={styles.verticalVendorCard__card}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    verticalVendorCard__container: {
        paddingLeft: 10,
    },
    verticalVendorCard__card: {
        backgroundColor: colors.grey,
        borderRadius: 15,
        width: 136,
        height: 194,
    }
})

export default VerticalVendorCard
