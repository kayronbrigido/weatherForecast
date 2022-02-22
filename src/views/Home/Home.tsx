import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native';
import CityCard from '@src/components/CityCard';
import FloatingLeftButton from '@src/components/FloatingLeftButton';
import styles from "./HomeStyle"
import * as NavigationService from '@services/NavigationService';
import { useDispatch } from 'react-redux';
import { getWeather, getWeatherArr } from '@src/store/redux-store/actions/weather';
import useReduxState from '@src/hooks/useReduxState';
import { getCities } from '@src/store/redux-store/actions/city';

const Home: React.FC = () => {

    const navigation = NavigationService
    const [hasCity, setHasCity] = useState(false);
    const dispatch = useDispatch();
    const [minTemp, setMinTemp] = useState("");
    const [maxTemp, setMaxTemp] = useState("");
    const [temp, setTemp] = useState("");
    const [description, setDescription] = useState("");
    const { weather: { weatherArr, weather }, city } = useReduxState();

    useFocusEffect(
        React.useCallback(() => {
            dispatch(getCities());
        }, [])
    )

    useEffect(() => {
        if (city?.Cities) {
            dispatch(getWeatherArr(city?.Cities))
        }
    }, [city?.Cities])

    useEffect(() => {
        if (weatherArr) {
            setHasCity(true)
        }
    }, [weatherArr])

    const handleSubmit = (city: string, UF: string) => {
        dispatch(getWeather(city, UF))
       navigation.navigate("City")
    }
    
    return (

        <>
            {hasCity ?
                <ScrollView>
                    {city?.Cities?.map((i, index) => {

                        return (

                            <CityCard key={index}
                                title={i.city}
                                subtitle='Brasíl'
                                forecast={""}
                                minTemperature={parseInt(weatherArr[index].daily[0].temp.min) + "°"}
                                maxTemperature={parseInt(weatherArr[index].daily[0].temp.max) + "°"}
                                temperature={parseInt(weatherArr[index].current.temp) + "°"}
                                onPress={() => { handleSubmit(i.city, i.UF) }}
                                showIcon={true}
                            />
                        )
                    })
                    }
                </ScrollView>
                :
                <View style={[styles.noCityContainer, styles.container]}>
                    <Text style={styles.title}>Parece que você ainda não adicionou uma cidade</Text>
                    <Text style={styles.text}>Tente adicionar uma cidade usando o botão de adição</Text>
                </View>
            }
            <View style={{ backgroundColor: "rbga(0,0,0,0)" }}>
                <FloatingLeftButton
                    onPress={() => { navigation.navigate("SearchCity") }} />
            </View>
        </>
    )
}

export default Home;