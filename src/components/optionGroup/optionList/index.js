import React from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper'
import styles from './styles'
import colors from '../../../assets/theme/colors'
const OptionList = () => {
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={{marginTop: 5,}}>
            <View style={styles.fooddetail__header__title}>
                <View style={{ alignItems: 'flex-start', flexDirection: 'row' }}>
                    <Checkbox.Android
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <View>
                        <Text style={styles.text__medium__16}>Option text</Text>
                        <Text style={styles.text__medium__14, { color: colors.grey, fontFamily: 'Kanit' }}>Status</Text>
                    </View>

                </View>
            </View>
            <View
                style={{
                    borderBottomColor: colors.grey,
                    borderBottomWidth: 1,
                    marginHorizontal: 20,
                }}
            />
        </View>
    )
}

export default OptionList
