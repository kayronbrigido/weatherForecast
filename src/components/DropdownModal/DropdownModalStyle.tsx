import { StyleSheet } from "react-native";
import * as colors from "../../config/theme.json";
import variables from "../../config/variables";
import { winHeight, winWidth } from "../../services";

export default StyleSheet.create({
    input: {
        marginTop: 10,
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingLeft: 5,
    },
    overlay: {
        alignItems: "center",
        backgroundColor: "rgba(1, 1, 1, 0.75)",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: winHeight * 0.15,
        maxHeight: winHeight,
    },
    paper: {
        backgroundColor: "#f2f2f2",
        borderRadius: 5,
        minWidth: winWidth * 0.70,
    },
    list: {
        paddingHorizontal: 20,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "transparent",
    },
    touchButtonRadio: {
        height: 20,
        width: 20,
        borderRadius: 20,
        borderWidth: 1,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    touchButtonRadioColored: {
        borderColor: colors.primaryColor
    },
    coloredRadio: {
        borderRadius: 6,
        width: 12,
        height: 12,
        backgroundColor: colors.primaryColor
    },
    separator: {
        height: 1,
        backgroundColor: "#000",
        opacity: 0.1
    }
})