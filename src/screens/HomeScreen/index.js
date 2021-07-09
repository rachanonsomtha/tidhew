import React from 'react'
import { View, StyleSheet, ScrollView, Button } from 'react-native'
import Categories from '../../components/categories'
import VendorGroup from '../../components/vendorGroup'
import VerticalVendor from '../../components/verticalVendor'
import { VENDORDETAIL } from '../../constants/routeNames'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ height: '100%' }}>
            <ScrollView>
                <Categories title={"ประเภทที่มีทั้งหมด"} />
                <Categories title={"ร้านที่แนะนำ (SPONSER)"} />
                <VendorGroup  />
                <VerticalVendor title="รายการรับหิ้ว" />
            </ScrollView>
        </View>
    )
}

export default HomeScreen
