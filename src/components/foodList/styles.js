import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    foodList__container: {
        flexDirection: 'row',
        height: 85,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    foodList__header: {
        flexDirection: 'column',
        width: '50%',
        height: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'space-between'
    },
    foodList__headerTitle: {
        fontSize: 14,
        fontFamily: 'Kanit',
    },
    foodList__headerDescription: {
        fontSize: 10,
        fontFamily: 'Kanit',
        fontWeight: "100"
    },
    foodList__headerPrice: {
        fontSize: 14,
        fontFamily: 'Kanit',
        fontWeight: 'bold'
    },
    foodList__imageContainer: {
        margin: 10,
        width: 70,
        height: 70,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})