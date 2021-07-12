import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/core'
import { FOODDETAIL } from '../../constants/routeNames'

const FoodList = ({ title, description, imageUrl, price }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(FOODDETAIL)}>
            <View style={{ flexDirection: 'column', marginBottom: 10, }}>
                <View style={styles.foodList__container}>
                    <View style={styles.foodList__header}>
                        <Text style={styles.foodList__headerTitle}>{title}</Text>
                        <Text numberOfLines={1} style={styles.foodList__headerDescription}>{description}</Text>
                        <Text style={styles.foodList__headerPrice}>{price}</Text>
                    </View>
                    <View style={styles.foodList__imageContainer}>
                        <Image
                            style={styles.image}
                            source={{ uri: imageUrl }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}

export default FoodList
