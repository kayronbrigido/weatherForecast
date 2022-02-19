import { StyleSheet } from "react-native";
import * as colors from "../../config/theme.json";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primaryColor,
        borderRadius: 50,
        left: 20,
        bottom: 20,
        position: "absolute"
    },
    plusButton: {
        color: colors.whiteColor,
        fontSize: 30,
        paddingHorizontal: 12,
    }
})