import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View } from 'react-native';
import FloatingLeftButton from '../../components/FloatingLeftButton';
import styles from "./HomeStyle"

const Home: React.FC = () => {

    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>Você esta na Home</Text>
            <FloatingLeftButton 
            onPress={() =>  {  navigation.navigate("SeachScreen") } }/>
        </View>
    )
}

export default Home;