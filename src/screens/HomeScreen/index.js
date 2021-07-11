import React from 'react'
import { View, StyleSheet, ScrollView, Button } from 'react-native'
import Categories from '../../components/categories'
import VendorGroup from '../../components/vendorGroup'
import VerticalVendor from '../../components/verticalVendor'
import { VENDORDETAIL } from '../../constants/routeNames'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from '../../components/drawer'
import { useDispatch } from 'react-redux'
const Drawer = createDrawerNavigator();

function HomeScreenComponent() {
    return (
        <View style={{ height: '100%' }}>
            <ScrollView>
                <Categories title={"ประเภทที่มีทั้งหมด"} />
                <Categories title={"ร้านที่แนะนำ (SPONSER)"} />
                <VendorGroup />
                <VerticalVendor title="รายการรับหิ้ว" />
            </ScrollView>
        </View>);
}

const HomeScreen = () => {
    return (
        <Drawer.Navigator drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="Home" component={HomeScreenComponent} />
        </Drawer.Navigator>
    )
}


export default HomeScreen
