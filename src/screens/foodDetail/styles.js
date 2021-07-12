import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey
    },
    carousel: {
        height: 200,
        backgroundColor: colors.grey,
        flex: 0,
    },
    image: {
        zIndex: -1,
        width: '100%',
        height: '100%'
    },
    exit__button: {
        zIndex: 2,
        position: 'absolute',
        top: 50,
        left: 30,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    fooddetail__header: {
        backgroundColor: colors.white,
        flex: 0,
    },
    fooddetail__header__title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
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
        marginTop: 10,
        backgroundColor: colors.white,
        flex: 0,
    },
    foodOption__title: {
        paddingHorizontal: 20,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})