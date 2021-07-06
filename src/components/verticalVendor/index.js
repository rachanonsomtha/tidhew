import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'
import VerticalVendorCard from './verticalVendorCard'

const VerticalVendor = (props) => {
    const { title } = props
    return (
        <View style={styles.categoriesContainer}>
            <Text style={styles.cardTitle}>{title}</Text>

            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={true}
            >
                <VerticalVendorCard />
                <VerticalVendorCard />
                <VerticalVendorCard />
                <VerticalVendorCard />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    cardTitle: {
        fontSize: 18,
        fontWeight: "normal",
        padding: 20,
        fontFamily: 'Kanit'
    },
    categoriesContainer: {
        marginTop: 15,
    },
})

export default VerticalVendor
