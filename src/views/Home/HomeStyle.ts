import { StyleSheet } from "react-native";
import variables from "../../config/variables";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0)"
    },
    noCityContainer: {
        marginVertical: "50%"
    },
    title: {
        fontWeight: "bold",
        fontSize: variables.fontSizeTitle,
        textAlign: "center",
        marginHorizontal: 30,
    },
    text: {
        fontSize: variables.fontSizeMain,
        textAlign: "center",
        marginHorizontal: 30,
    }
})