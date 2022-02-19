import React, { useState } from 'react'
import { Text, View } from 'react-native';
import styles from "./SearchCityStyle"
import DropdownModal from '../../components/DropdownModal/';
import variables from '../../config/variables';

const SearchCity: React.FC = () => {

    const data = [
        "texto01",
        "texto02",
        "texto03",
        "texto04",
        "texto05",
        "texto06",
        "texto07",
        "texto08",
        "texto09",
        "texto10",
        "texto11",
        "texto12",
        "texto13",
        "texto14",
        "texto15",
        "texto16",
        "texto17",
        "texto18",
        "texto19",
        "texto20",
        "texto21",
        "texto22",
        "texto23",
        "texto24",
        "texto25",
        "texto26",
        "texto27",
        "texto28",
        "texto29",        
    ]
    const [isVisibleUF, setIsVisibleUF] = useState(false)
    const [selectedUF, setSelectedUF] = useState("")
    return(
        <View style={styles.container}>
            <DropdownModal 
                data={data}
                onSelect={(name) => setSelectedUF(name)}
                setVisible={setIsVisibleUF}
                visible={isVisibleUF} 
                value={selectedUF} 
                placeholder={"Selecione o Estado"}
                placeholderStyle={{fontSize: variables.fontSizeTitle, fontWeight: "bold"}}
            />
        </View>
    )
}

export default SearchCity;