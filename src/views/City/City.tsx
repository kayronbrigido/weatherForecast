import { useFocusEffect, useNavigation } from '@react-navigation/native';
import CityCard from '@src/components/CityCard';
import useReduxState from '@src/hooks/useReduxState';
import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import styles from "./CityStyle"
import * as NavigationService from '@services/NavigationService';

const City: React.FC = () => {

    const { weather: { weather } } = useReduxState();
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const months = ["Janeiro","Fevereiro","Março","Abril","Maior","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Previsão para os próximos 5 dias</Text>
            {weather?.daily?.map((day, index) => {
                if(index > 4) return <></>

                const dateArr = [
                    new Date().getDate() + index,
                    new Date().getMonth(),
                    new Date().getFullYear(),   
                ]

                let date = new Date(dateArr[2], dateArr[1], dateArr[0]).toLocaleDateString("pt-Br", { year:"numeric"})
                date = date.split("/")
                date = date[1] + " de " + months[parseInt(date[0]) - 1] + " de " + new Date().getFullYear()
                let d: number | string = new Date().getDay() + index

                if(d > 6) d = d - 7
                d = days[d]
                if(index === 0) d = "Hoje"
                if(index === 1) d = "Amanhã"

                return(
                < CityCard key={index}
                    title={d}
                    subtitle={date}
                    forecast={day.weather[0].description}
                    minTemperature={parseInt(day.temp.max) + "°"}
                    maxTemperature={parseInt(day.temp.max) + "°"}
                    temperature={parseInt(day.temp.day) + "°"}
                    onPress={() => { }}
                    showIcon={false}
                />)})}
        </ScrollView>
    )
}

export default City;