import axios from "axios";

const API_KEY = "00af33ee76641a1953fb73e51453b9d5"

const WeatherApi = {
    getWeather: async (city: string, UF: string) => {

        const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${UF},Brazil&limit=1&appid=${API_KEY}`)
        const lat = res.data[0].lat;
        const lon = res.data[0].lon;

        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&exclude=minutely&appid=${API_KEY}`)
       
        return data;
    }
}

export default WeatherApi;