import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

const Categories = (props) => {
    const { title } = props
    return (
        <View>
            <Text style={styles.cardTitle}>{title}</Text>
            <View style={styles.categoriesContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 10 }}>
                        <View style={styles.cardContainer}>
                        </View>
                        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.name}>text 1</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 10 }}>
                        <View style={styles.cardContainer}>
                        </View>
                        <Text style={styles.name}>text 1</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 10 }}>
                        <View style={styles.cardContainer}>
                        </View>
                        <Text style={styles.name}>text 1</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 10 }}>
                        <View style={styles.cardContainer}>
                        </View>
                        <Text style={styles.name}>text 1</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 10 }}>
                        <View style={styles.cardContainer}>
                        </View>
                        <Text style={styles.name}>text 1</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 10 }}>
                        <View style={styles.cardContainer}>
                        </View>
                        <Text style={styles.name}>text 1</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 10 }}>
                        <View style={styles.cardContainer}>
                        </View>
                        <Text style={styles.name}>text 1</Text>
                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', paddingHorizontal: 10 }}>
                        <View style={styles.cardContainer}>
                        </View>
                        <Text style={styles.name}>text 1</Text>
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    categoriesContainer: {
        flexDirection: 'row',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "normal",
        padding: 20,
        fontFamily: 'Kanit'
    },
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    cardContainer: {
        backgroundColor: colors.grey,
        borderRadius: 15,
        width: 100,
        height: 100,
    },
    name: {
        paddingTop: 5,
        fontSize: 12,
        width: 60,
        textAlign: 'center',
        fontFamily: 'Kanit'
    }
})

export default Categories
