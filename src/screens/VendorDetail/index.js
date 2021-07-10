import React, { useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'
import ViewMoreText from 'react-native-view-more-text';
import colors from '../../assets/theme/colors';
import FoodList from '../../components/foodList'

function VendorDetail() {
    const renderViewMore = (onPress) => {
        return (
            <Text style={{ fontFamily: 'Kanit', fontSize: 12, color: colors.lightOrange }} onPress={onPress}>View more</Text>
        )
    }
    const renderViewLess = (onPress) => {
        return (
            <Text style={{ fontFamily: 'Kanit', fontSize: 12, color: colors.lightOrange }} onPress={onPress}>View less</Text>
        )
    }

    return (
        <ScrollView>
            <View style={styles.carousel}>
            </View>
            <View style={styles.header}>
                <View style={styles.header__title}>
                    <View style={styles.header__titlePicture}>
                    </View>
                    <Text style={styles.header__titleName}>
                        Somtum by tok tok
                    </Text>
                </View>
                <View style={styles.header__info}>
                    <Text style={styles.header__infoText}>รอบส่งถัดไป</Text>
                    <Text style={styles.header__infoText}>View 657</Text>
                </View>
                <View
                    style={styles.header__detail}
                >
                    <Text style={styles.header__detailText} numberOfLines={2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. really long text...
                    </Text>
                </View>
            </View>
            <View style={styles.details}>
                <Text style={{ fontFamily: 'Kanit', fontSize: 16 }}>รายละเอียด</Text>
                <ViewMoreText
                    numberOfLines={2}
                    renderViewMore={renderViewMore}
                    renderViewLess={renderViewLess}
                >
                    <Text style={{ fontFamily: 'Kanit', fontSize: 10 }}>
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                    </Text>
                </ViewMoreText>

            </View>

            <View style={{ backgroundColor: colors.grey, marginTop: 10, padding: 10, height: 100, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingRight: 10, }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Kanit', paddingRight: 10, }}>ส่งสำเร็จ</Text>
                        <View style={{ borderRadius: 5, width: 70, backgroundColor: 'white', height: 25, }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingRight: 10, }}>
                        <Text style={{ fontSize: 10, fontFamily: 'Kanit', paddingRight: 10, }}>คะแนนรีวิว</Text>
                        <View style={{ borderRadius: 5, width: 70, backgroundColor: 'white', height: 25, }}></View>
                    </View>
                </View>
                <View style={{ borderRadius: 5, width: '80%', backgroundColor: 'white', height: 40, justifyContent: 'center', alignItems: 'center'  }}>
                    <Text style={{ fontSize: 10, fontFamily: 'Kanit', fontWeight: 'bold', paddingRight: 10}}>แชทกับร้านค้า</Text>

                </View>
            </View>

            <View style={styles.foodList}>
                <Text style={{ fontFamily: 'Kanit', fontSize: 16 }}>สั่งสำหรับรอบถัดไป</Text>
                <FoodList
                    title={"ข้าวไข่ยัดไส้หมู"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    imageUrl={"https://theculturetrip.com/wp-content/uploads/2020/04/2bcpa1n.jpg"}
                    price={20} />
                <FoodList
                    title={"ข้าวไข่ยัดไส้หมู"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    imageUrl={"https://theculturetrip.com/wp-content/uploads/2020/04/2bcpa1n.jpg"}
                    price={20} />
                <FoodList
                    title={"ข้าวไข่ยัดไส้หมู"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    imageUrl={"https://theculturetrip.com/wp-content/uploads/2020/04/2bcpa1n.jpg"}
                    price={20} />
            </View>
        </ScrollView >
    )
}

export default VendorDetail
