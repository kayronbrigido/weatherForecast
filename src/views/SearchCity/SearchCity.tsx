import React, { useEffect, useReducer, useState } from 'react'
import { View } from 'react-native';
import styles from "./SearchCityStyle"
import DropdownModal from '@src/components/DropdownModal/';
import LargeButton from '@src/components/LargeButton';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getCity, getState } from '@src/store/redux-store/actions/city';
import useReduxState from '@src/hooks/useReduxState';
import { IUF } from '@src/interfaces';

const SearchCity: React.FC = () => {

    const [ufData, setUfData] = useState<string[]>([]);
    const [cityData, setCityData] = useState<string[]>([]);
    const [isVisibleUF, setIsVisibleUF] = useState(false);
    const [isVisibleCity, setIsVisibleCity] = useState(false);
    const [selectedUF, setSelectedUF] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const dispatch = useDispatch();
    const { city } = useReduxState()

    useEffect(() => {
        dispatch(getState())
    }, [])

    useEffect(() => {
        dispatch(getCity(selectedUF))
    }, [selectedUF])

    useEffect(() => {
        let UF: string[] = [];
        city.UF?.map((state: IUF) => UF.push(state.sigla))
        setUfData(UF)
    }, [city.UF])

    useEffect(() => {
        let cities: string[] = [];
        city.City?.map((city: IUF) =>  cities.push(city.nome))
        setCityData(cities)
    }, [city.City])

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
                    onPress={() => { }} />
            </View>
        </View>
    )
}

export default SearchCity;

function useReducerState(): {} {
    throw new Error('Function not implemented.');
}
