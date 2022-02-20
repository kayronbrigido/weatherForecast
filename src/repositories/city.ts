import axios from "axios"

import { IUF } from "@src/interfaces"
const BASE_URL = "https://servicodados.ibge.gov.br/api/v1/localidades"

const CityApi = {

    getState: async () =>{
        const { data } = await axios.get(`${BASE_URL}/estados`)

        return data as IUF[];
    },

    getCity: async (UF: string) =>{
        const { data } = await axios.get(`${BASE_URL}/estados/${UF}/municipios?orderBy=nome`)

        return data as IUF[];
    }
}

export default CityApi;