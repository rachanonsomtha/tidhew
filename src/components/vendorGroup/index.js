import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import colors from '../../assets/theme/colors'
import VendorCard from './vendorCard'
const VendorGroup = () => {
    return (
        <View>
            <View style={styles.vendorGroupContainer} >
                <Text style={styles.title}>ร้านที่น่าสนใจ</Text>
                <Text style={styles.viewmore}>ดูเพิ่มเติม</Text>
            </View>
            <VendorCard />
            <VendorCard />
            <VendorCard />
        </View>
    )
}

const styles = StyleSheet.create({
    vendorGroupContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'Kanit'
    },
    viewmore: {
        fontSize: 13,
        fontWeight: 'normal',
        color: colors.lightOrange,
        fontFamily: 'Kanit'
    }
})

export default VendorGroup
