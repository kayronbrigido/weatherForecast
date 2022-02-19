import { StyleSheet } from "react-native";
import * as colors from "../../config/theme.json";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primaryColor,
        borderRadius: 50,
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "flex-start",
        marginBottom: 50,
        marginTop: "auto",
        margin: 20,
    },
    plusButton: {
        color: colors.whiteColor,
        fontSize: 30,
        paddingHorizontal: 12,
    }
})