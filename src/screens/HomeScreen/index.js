import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Categories from '../../components/categories'
import VendorGroup from '../../components/vendorGroup'
import VerticalVendor from '../../components/verticalVendor'

const HomeScreen = () => {
    return (
        <View style={{ height: '100%' }}>
            <ScrollView>
                <Categories title={"ประเภทที่มีทั้งหมด"} />
                <Categories title={"ร้านที่แนะนำ (SPONSER)"} />
                <VendorGroup />
                <VerticalVendor title="รายการรับหิ้ว"/>
            </ScrollView>
        </View>
    )
}

export default HomeScreen
