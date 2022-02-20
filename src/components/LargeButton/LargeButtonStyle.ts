import { StyleSheet } from "react-native";
import * as colors from "../../config/theme.json";
import variables from "../../config/variables";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primaryColor,
        borderRadius: 10,
        paddingVertical: 20,
        alignItems: "center"
    },
    title: {
        fontSize: variables.fontSizeTitle,
        color: colors.whiteColor,
        fontWeight: "bold",
    }
})