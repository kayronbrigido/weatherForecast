import React from "react"
import { Text, TouchableOpacity } from "react-native"
import styles from "./LargeButtonStyle"
interface ILargeButton {
    title: String,
    onPress: Function,
    disableButton?: boolean
}

const LargeButton = (props: ILargeButton) => {
    const {
        title,
        onPress,
        disableButton = false,
    } = props
    return(
        <TouchableOpacity 
        style={styles.container}
        onPress={() => { onPress()}} 
        disabled={disableButton}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default LargeButton;