import CityApi from "@src/repositories/city"

import { GET_CITIES, GET_CITY, GET_STATE, SET_CITY } from "./actionType";
import AsyncStorage from '@react-native-async-storage/async-storage';
import useReduxState from "@src/hooks/useReduxState";


export const getState = () => async (dispatch: any) => {
    try {
        const payload = await CityApi.getState();
        if (payload) {
            dispatch({
                type: GET_STATE,
                payload
            })
        }
    } catch (err) {
        console.error(err)
    }
}

export const getCity = (UF: string) => async (dispatch: any) => {
    try {
        const payload = await CityApi.getCity(UF);
        if (payload) {
            dispatch({
                type: GET_CITY,
                payload
            })
        }
    } catch (err) {
        console.error(err)
    }
}

export const setCity = (data: any) => async (dispatch: any) => {
    try {
        const payload = data;
        await AsyncStorage.setItem('city', JSON.stringify(payload))
        dispatch({
            type: SET_CITY,
            payload
        })
    } catch (err) {
        console.error(err)
    }
}

export const getCities = () => async (dispatch: any) => {
    try {
        const res = await AsyncStorage.getItem('city')
        const payload = res ? JSON.parse(res) : null;
        if (payload) {
            dispatch({
                type: GET_CITIES,
                payload
            })
        }
    } catch (err) {
        console.error(err)
    }
}