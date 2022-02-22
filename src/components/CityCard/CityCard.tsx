import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./CityCardStyle";
import IconHeartEmpty from "../../assets/heartEmpty.svg";
import IconHeartFull from "../../assets/heartFull.svg";

interface IFloatingLeftButton {
    title: string,
    subtitle: string,
    forecast: string,
    minTemperature: string,
    maxTemperature: string,
    temperature: string,
    onPress: Function,
    showIcon?: boolean,
}
const CityCard = (props: IFloatingLeftButton) => {
    let {
        title,
        subtitle,
        forecast,
        minTemperature,
        maxTemperature,
        temperature,
        onPress,
        showIcon = false,
    } = props;

    const [favotire, setFavorite] = useState(false);

    if(title.length > 15) title = title.substring(0,15) + "..."
    
    return (
        <TouchableOpacity
            style={styles.container}
            onLongPress={() => { setFavorite(!favotire) }}
            onPress={() => { onPress() }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}>{subtitle}</Text>
                    <View>
                        <Text style={styles.timeText}>{forecast}</Text>
                        <Text style={styles.text}>{minTemperature + " - " + maxTemperature}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.temperatureText}>{temperature}</Text>
                    {showIcon ?
                        favotire ? <IconHeartFull /> : <IconHeartEmpty />
                        :
                        <></>
                    }

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CityCard;