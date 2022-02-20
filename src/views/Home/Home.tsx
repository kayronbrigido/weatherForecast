import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native';
import CityCard from '@src/components/CityCard';
import FloatingLeftButton from '@src/components/FloatingLeftButton';
import styles from "./HomeStyle"
import * as NavigationService from '@services/NavigationService';

const Home: React.FC = () => {

    const navigation = NavigationService
    const [hasCity, setHasCity] = useState(true);

    return (

        <>
            {hasCity ?
                <ScrollView>
                    <CityCard
                        city='Campinas'
                        country='Brasíl'
                        forecast='Ensolarado'
                        minTemperature={21}
                        maxTemperature={30}
                        temperature={25}
                        onPress={() => { navigation.navigate("City") }} />
                </ScrollView>
                :
                <View style={styles.noCityContainer}>
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