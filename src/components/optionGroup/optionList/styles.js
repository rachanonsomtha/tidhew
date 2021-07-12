import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    fooddetail__header__title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    text__medium__20: {
        fontSize: 20,
        fontFamily: 'Kanit'
    },
    text__medium__16: {
        fontSize: 16,
        fontFamily: 'Kanit'
    },
    text__medium__14: {
        fontSize: 14,
        fontFamily: 'Kanit'
    },
    optionPicker: {
        height: 100,
        marginVertical: 10,
        backgroundColor: colors.white,
        flex: 0,
    },
})