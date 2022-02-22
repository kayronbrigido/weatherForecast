import { ICityWether, IWeather } from "."

export type CityState = {
    UF: Array[] | null,
    City: Array[] | null,
    Cities?: Array[] | null
    SetCity: Array[] | null
}

export type WeatherState = {
    weather: IWeather | null,
    weatherArr: IWeather[] | null
}

export type ReduxState = {
    city: CityState,
    weather: WeatherState
}