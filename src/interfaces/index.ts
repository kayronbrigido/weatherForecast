export type City {
    name: string,
    UF: string,
    acronymUF: string
}

export interface IUF {
    nome: string,
    sigla: string
}

export interface IWeather {
    current: {
        temp: number | null
    }
    hourly?: IHourlyWeather | null
    daily: IDailyWeather[] | null
}

interface IHourlyWeather {
    temp: number,
    weather: {
        description: string,
        icon: string
    }
}

interface IDailyWeather {
    weather: [{
        description: string,
        icon: string
    }]
    temp: {
        min: number,
        max: string
    }
}

export interface ICityWether {
    name: string
    temp: {
        day: Number,
        eve: Number,
        max: Number,
        min: Number,
        morn: Number,
        night: Number
    },
    weather: {
        description: string,
        icon: string,
        id: string,
        main: string
    }
}