import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./FloatingLeftButtonStyle";

interface IFloatingLeftButton {
    onPress: Function;
}
const FloatingLeftButton = (props: IFloatingLeftButton) => {
    const {
        onPress,
    } = props;

    return (
        <TouchableOpacity 
        style={styles.container} 
        onPress={ () => { onPress() } }>
            <View >
                <Text style={styles.plusButton}>+</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FloatingLeftButton;