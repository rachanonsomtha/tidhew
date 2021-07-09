import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../../assets/theme/colors'
import { Button } from 'react-native-paper'

const VerticalVendorCard = () => {
    return (
        <View style={styles.verticalVendorCard__container}>
            <View style={styles.verticalVendorCard__card}></View>
            <View style={styles.verticalVendorCard__detailContainer}>
                <View style={styles.verticalVendorCard__circleAvatar}>
                </View>
                <View>
                    <Text style={{ fontSize: 9, fontFamily: 'Kanit' }}>ร้านค้า 1</Text>
                    <Text style={{ fontSize: 9, fontFamily: 'Kanit' }}>ร้านค้าแนะนำ</Text>
                </View>
                <Button
                    style={styles.verticalVendorCard__button}
                    compact
                    raised onPress={() => console.log('Pressed')}>
                    <Text style={styles.verticalVendorCard__vendorTitle}>คลิกเลย</Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    verticalVendorCard__button: {
        backgroundColor: colors.lightOrange,
    },
    verticalVendorCard__detailContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    verticalVendorCard__circleAvatar: {
        borderRadius: 20,
        width: 20,
        height: 20,
        backgroundColor: colors.grey
    },
    verticalVendorCard__vendorTitle: {
        fontFamily: 'Kanit',
        fontSize: 9,
        color: colors.black
    },
    verticalVendorCard__container: {
        paddingLeft: 10,
        paddingBottom: 20,
        flexDirection: 'column'
    },
    verticalVendorCard__card: {
        backgroundColor: colors.grey,
        borderRadius: 15,
        width: 136,
        height: 179,
    }
})

export default VerticalVendorCard
