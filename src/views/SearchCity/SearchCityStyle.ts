import { StyleSheet } from "react-native";
import variables from '@src/config/variables';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:30,
    },
    buttonPosition: {
        marginBottom: 20,
        marginTop: "auto",
    },
    placeholder: {
        fontSize: variables.fontSizeTitle, 
        fontWeight: "bold" 
    }
})