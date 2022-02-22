import { City } from "@src/interfaces";
import WeatherApi from "@src/repositories/weather";
import { GET_WEATHER, GET_WEATHER_ARR } from "./actionType";

export const getWeather = (city: string, UF: string) => async (dispatch: any) => {
    try {
        const payload = await WeatherApi.getWeather(city, UF);
        if (payload) {
            
            dispatch({
                type: GET_WEATHER,
                payload
            })
        }
        
    } catch (err) {
        console.error(err)
    }
}

export const getWeatherArr = (Cities: Array<any>[]) => async (dispatch: any) => {
    let arr: any[] = []
    let data: any;
    try {
        const request = Cities?.map(async (i: any) => {
            data = await WeatherApi.getWeather(i.city, i.acronymUF);
            arr.push(data)
        })

        Promise.all(request).then(() => {
            dispatch({
                type: GET_WEATHER_ARR,
                payload: arr
            })
        })
    } catch (err) {
        console.error(err)
    }
} 