import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../../assets/theme/colors'

const VendorCard = () => {
    return (
        <View style={styles.vendorCardContainer}>
            <View style={styles.imageContainer}></View>
            <View style={styles.detailContainer}>
                <View style={styles.circleAvatar}>
                </View>
                <View style={{ paddingLeft: 8 }}>
                    <Text style={styles.vendorInfo}>ร้านที่น่าสนใจ</Text>
                    <View>
                        <Text style={styles.vendorInfo}>(124 rating Thai food, spicy)</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    vendorInfo: {
        fontFamily: 'Kanit'
    },
    detailContainer: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingHorizontal: 10
    },
    vendorCardContainer: {
        flexDirection: 'column'
    },
    imageContainer: {
        width: '100%',
        height: 200,
        backgroundColor: colors.grey
    },
    circleAvatar: {
        borderRadius: 20,
        width: 40,
        height: 40,
        backgroundColor: colors.grey
    }
})


export default VendorCard
