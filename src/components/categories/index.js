import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import colors from '../../assets/theme/colors'

const Categories = (props) => {
    const { title } = props
    return (
        <View>
            <Text style={styles.cardTitle}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
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
    cardTitle: {
        fontSize: 18,
        fontWeight: "normal",
        padding: 20,
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
        textAlign: 'center'
    }
})

export default Categories
