import React, { useState } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import ViewMoreText from 'react-native-view-more-text';
import colors from '../../assets/theme/colors';

function VendorDetail() {
    const renderViewMore = (onPress) => {
        return (
            <Text style={{ fontFamily: 'Kanit', fontSize: '12', color: colors.lightOrange }} onPress={onPress}>View more</Text>
        )
    }
    const renderViewLess = (onPress) => {
        return (
            <Text style={{ fontFamily: 'Kanit', fontSize: '12', color: colors.lightOrange }} onPress={onPress}>View less</Text>
        )
    }

    return (
        <View>
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
                <Text style={{ fontFamily: 'Kanit', fontSize: '14' }}>รายละเอียด</Text>
                <ViewMoreText
                    numberOfLines={3}
                    renderViewMore={renderViewMore}
                    renderViewLess={renderViewLess}
                >
                    <Text style={{ fontFamily: 'Kanit', fontSize: '10' }}>
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                        Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
                    </Text>
                </ViewMoreText>

            </View>
        </View >
    )
}

export default VendorDetail
