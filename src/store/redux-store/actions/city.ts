import CityApi from "@src/repositories/city"
import { GET_CITY, GET_STATE } from "./actionType";

export const getState = () => async (dispatch: any) => {
    try {
        const payload = await CityApi.getState();
        if(payload){
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
        if(payload){
            dispatch({
                type: GET_CITY,
                payload
            })
        }
    } catch (err) {
        console.error(err)
    }
}