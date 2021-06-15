import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Categories from '../../components/categories'
import VendorGroup from '../../components/vendorGroup'

const HomeScreen = () => {
    return (
        <View style={{ height: '100%' }}>
            <ScrollView>
                <Categories title={"ประเภทที่มีทั้งหมด"} />
                <Categories title={"ร้านที่แนะนำ (SPONSER)"} />
                <VendorGroup />
            </ScrollView>
        </View>
    )
}

export default HomeScreen
