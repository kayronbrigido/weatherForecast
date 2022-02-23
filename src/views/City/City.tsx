import { useFocusEffect, useNavigation } from '@react-navigation/native';
import CityCard from '@src/components/CityCard';
import useReduxState from '@src/hooks/useReduxState';
import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import styles from "./CityStyle"
import * as NavigationService from '@services/NavigationService';
import LargeButton from '@src/components/LargeButton';
import { useDispatch } from 'react-redux';
import { setCity } from '@src/store/redux-store/actions/city';

const City: React.FC = () => {
    const navigation = NavigationService
    const { weather: { weather }, city: { Cities, SelectedCity } } = useReduxState();
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maior", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const dispatch = useDispatch();
    
    const handleSubmit = () => {
        let arr: any[] = []
        let newArr: any[] = []
        if (Cities?.length > 0) {
            Cities?.map((i) => arr.push(i))
            
        }
        arr = arr.filter((item) => item.city !== SelectedCity)
        dispatch(setCity(arr))
        navigation.navigate("Home")
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Previsão para os próximos 5 dias</Text>
            {weather?.daily?.map((day, index) => {
                if (index > 4) return <></>

                const dateArr = [
                    new Date().getDate() + index,
                    new Date().getMonth(),
                    new Date().getFullYear(),
                ]

                let date = new Date(dateArr[2], dateArr[1], dateArr[0]).toLocaleDateString("pt-Br", { year: "numeric" })
                date = date.split("/")
                date = date[1] + " de " + months[parseInt(date[0]) - 1] + " de " + new Date().getFullYear()
                let d: number | string = new Date().getDay() + index

                if (d > 6) d = d - 7
                d = days[d]
                if (index === 0) d = "Hoje"
                if (index === 1) d = "Amanhã"

                return (
                    < CityCard key={index}
                        title={d}
                        subtitle={date}
                        forecast={day.weather[0].description}
                        minTemperature={parseInt(day.temp.max) + "°"}
                        maxTemperature={parseInt(day.temp.max) + "°"}
                        temperature={parseInt(day.temp.day) + "°"}
                        onPress={() => { }}
                        showIcon={false}
                    />)
            })}
            <View style={{ margin: 20 }}>
                <LargeButton title={"Remover Cidade"} onPress={() => { handleSubmit() }}
                />
            </View>
        </ScrollView>
    )
}

export default City;