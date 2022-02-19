import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native';
import CityCard from '../../components/CityCard';
import FloatingLeftButton from '../../components/FloatingLeftButton';
import styles from "./HomeStyle"

const Home: React.FC = () => {

    const navigation = useNavigation();
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

                    <CityCard
                        city='Campinas'
                        country='Brasíl'
                        forecast='Ensolarado'
                        minTemperature={21}
                        maxTemperature={30}
                        temperature={25}
                        onPress={() => { navigation.navigate("City") }} />

                    <CityCard
                        city='Campinas'
                        country='Brasíl'
                        forecast='Ensolarado'
                        minTemperature={21}
                        maxTemperature={30}
                        temperature={25}
                        onPress={() => { navigation.navigate("City") }} />

                    <CityCard
                        city='Campinas'
                        country='Brasíl'
                        forecast='Ensolarado'
                        minTemperature={21}
                        maxTemperature={30}
                        temperature={25}
                        onPress={() => { navigation.navigate("City") }} />

<CityCard
                        city='Campinas'
                        country='Brasíl'
                        forecast='Ensolarado'
                        minTemperature={21}
                        maxTemperature={30}
                        temperature={25}
                        onPress={() => { navigation.navigate("City") }} />

                    <CityCard
                        city='Campinas'
                        country='Brasíl'
                        forecast='Ensolarado'
                        minTemperature={21}
                        maxTemperature={30}
                        temperature={25}
                        onPress={() => { navigation.navigate("City") }} />

                    <CityCard
                        city='Campinas'
                        country='Brasíl'
                        forecast='Ensolarado'
                        minTemperature={21}
                        maxTemperature={30}
                        temperature={25}
                        onPress={() => { navigation.navigate("City") }} />

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
            <View style={{backgroundColor: "rbga(0,0,0,0)"}}>
                <FloatingLeftButton
                    onPress={() => { navigation.navigate("SearchCity") }} />
            </View>
        </>
    )
}

export default Home;