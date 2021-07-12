import React, { useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../assets/theme/colors'
import { useNavigation } from '@react-navigation/core'
import Option from '../../components/option'

const FoodDetail = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ScrollView
                stickyHeaderIndices={[0]}
            >
                <View style={styles.carousel}>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://www.sooksathorn.com/images/content/original-1593006369515.jpg' }}
                    />
                    <TouchableOpacity style={styles.exit__button} onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons
                            color={colors.white}
                            size={40}
                            name={"arrow-left-circle-outline"}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.fooddetail__header}>
                    <View style={styles.fooddetail__header__title}>
                        <Text style={styles.text__medium__20}>ข้าวไข่ยัดไส้หมู</Text>
                        <Text style={styles.text__medium__16}>50</Text>
                    </View>
                </View>
                <Option />
            </ScrollView>
        </View >
    )
}

export default FoodDetail
