import { StyleSheet } from "react-native";
import * as colors from "../../config/theme.json";
import variables from "../../config/variables";

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 50,
        elevation: 4,
    },
    title: {
        fontWeight: "bold",
        fontSize: variables.fontSizeTitle * 1.4,
    },
    text: {
        fontSize: variables.fontSizeMain,
    },
    timeText: {
        fontSize: variables.fontSizeMain,
        color: colors.secondaryColor,
        marginTop: 10,
    },
    temperatureText: {
        fontSize: variables.fontSizeMain * 1.8,
        color: colors.secondaryColor,
        marginTop: 10,
    },
})