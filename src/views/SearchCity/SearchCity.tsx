import React, { useEffect, useReducer, useState } from 'react'
import { View } from 'react-native';
import styles from "./SearchCityStyle"
import DropdownModal from '@src/components/DropdownModal/';
import LargeButton from '@src/components/LargeButton';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getCities, getCity, getState, setCity } from '@src/store/redux-store/actions/city';
import useReduxState from '@src/hooks/useReduxState';
import { IUF } from '@src/interfaces';
import * as navigation from "@src/services/NavigationService";
const SearchCity: React.FC = () => {

    const [ufData, setUfData] = useState<string[]>([]);
    const [cityData, setCityData] = useState<string[]>([]);
    const [isVisibleUF, setIsVisibleUF] = useState(false);
    const [isVisibleCity, setIsVisibleCity] = useState(false);
    const [selectedUF, setSelectedUF] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [acronymUF, setAcronymUF] = useState("");
    const dispatch = useDispatch();
    const { city } = useReduxState()

    useFocusEffect(
        React.useCallback(() => {
            dispatch(getState())
        }, [])
    )

    useEffect(() => {
        if (selectedUF) {
            const { sigla } = city.UF?.find(e => e.nome === selectedUF);
            setAcronymUF(sigla)
            dispatch(getCity(sigla))
        }
    }, [dispatch, city.UF, selectedUF])

    useEffect(() => {
        let UF: string[] = [];
        city.UF?.map((state: IUF) => UF.push(state.nome))
        setUfData(UF)
        setSelectedCity("")
    }, [city, dispatch])

    useEffect(() => {
        let cities: string[] = [];
        city.City?.map((city: IUF) => cities.push(city.nome))
        setCityData(cities)
    }, [city, dispatch])

    const handleSubmit = () => {

        dispatch(getCities())

        let arr = []

        if (city.Cities?.length > 0 && city) {
            city?.Cities?.map((i) => arr.push(i))
        }

        const obj = {
            UF: selectedUF,
            city: selectedCity,
            acronymUF
        }

        arr.push(obj)
        arr.sort((a, b) => {
            if ( a.city < b.city ){
                return -1;
              }
              if ( a.city > b.city ){
                return 1;
              }
              return 0;
        })
        dispatch(setCity(arr))
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <DropdownModal
                title='Estado'
                data={ufData}
                onSelect={(name) => setSelectedUF(name)}
                setVisible={setIsVisibleUF}
                visible={isVisibleUF}
                value={selectedUF}
                placeholder={"Selecione o Estado"}
                placeholderStyle={styles.placeholder}
            />

            <DropdownModal
                title='Cidade'
                data={cityData}
                onSelect={(name) => setSelectedCity(name)}
                setVisible={setIsVisibleCity}
                visible={isVisibleCity}
                value={selectedCity}
                placeholder={"Selecione a Cidade"}
                placeholderStyle={styles.placeholder}
            />

            <View style={styles.buttonPosition}>
                <LargeButton
                    title={"Adicionar Cidade"}
                    onPress={() => { handleSubmit() }} />
            </View>
        </View>
    )
}

export default SearchCity;

function useReducerState(): {} {
    throw new Error('Function not implemented.');
}
