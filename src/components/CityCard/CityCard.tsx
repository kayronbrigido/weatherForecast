import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./CityCardStyle";
import IconHeartEmpty from "../../assets/heartEmpty.svg";
import IconHeartFull from "../../assets/heartFull.svg";

interface IFloatingLeftButton {
    city: string,
    country: string,
    forecast: string,
    minTemperature: number,
    maxTemperature: number,
    temperature: number,
    onPress: Function;
}
const CityCard = (props: IFloatingLeftButton) => {
    const {
        city,
        country,
        forecast,
        minTemperature,
        maxTemperature,
        temperature,
        onPress,
    } = props;

    const [favotire, setFavorite] = useState(false);

    return (
        <TouchableOpacity
            style={styles.container}
            onLongPress={() => {  setFavorite(!favotire) }}
            onPress={() => { onPress() }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                <View>
                    <Text style={styles.title}>{city}</Text>
                    <Text style={styles.text}>{country}</Text>
                    <View>
                        <Text style={styles.timeText}>{forecast}</Text>
                        <Text style={styles.text}>{minTemperature + "°" + " - " + maxTemperature + "°"}</Text>
                    </View>
                </View>
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.temperatureText}>{temperature + "°"}</Text>
                    {favotire ? <IconHeartFull /> : <IconHeartEmpty />}
                    
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CityCard;