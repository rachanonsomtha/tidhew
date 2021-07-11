import { StyleSheet } from "react-native"
import { color } from "react-native-reanimated"
import colors from "../../assets/theme/colors"

export default StyleSheet.create({
    FlexGrowOne: {
        flexGrow : 1
    },
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 50,
    },
    title: {
        fontSize: 21,
        textAlign: 'center',
        fontWeight: "500",
        fontFamily: 'Kanit'
    },
    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: "500",
        fontFamily: 'Kanit'
    },
    form: {
        paddingTop: 20,
    },
    createSection: {
        flexDirection: 'row'
    },
    infoText: {
        fontSize: 17,
        fontFamily: 'Kanit'
    },
    linkBtn: {
        paddingLeft: 17,
        color: colors.lightOrange,
        fontSize: 16,
        fontFamily: 'Kanit'
    }
})