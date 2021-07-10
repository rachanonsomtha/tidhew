import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    carousel: {
        height: 148,
        backgroundColor: colors.grey,
        flex: 0,
    },
    header: {
        paddingHorizontal: 10,
        height: 120,
        backgroundColor: colors.lightGray,
    },
    header__title: {
        flexDirection: 'row',
        paddingTop: 9,
        alignItems: 'center'
    },
    header__titlePicture: {
        borderRadius: 5,
        width: 38,
        height: 38,
        backgroundColor: colors.grey,
    },
    header__titleName: {
        fontSize: 18,
        paddingLeft: 14,
        fontWeight: '600',
        fontFamily: 'Kanit'
    },
    header__info: {
        paddingTop: 9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header__infoText: {
        fontSize: 11,
        fontFamily: 'Kanit',
    },
    header__detail: {
        width: '50%'
    },
    header__detailText: {
        flexShrink: 1,
        fontSize: 14,
        fontFamily: 'Kanit'
    },
    details: {
        flex: 0,
        marginTop: 10,
        backgroundColor: colors.lightGray,
        padding: 10
    },
    foodList: {
        flexDirection: 'column',
        padding: 10
    },
})