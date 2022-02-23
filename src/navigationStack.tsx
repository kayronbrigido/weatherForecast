import * as React from 'react';

import { createStack } from "./services/NavigationService"
import City from "./views/City";
import Home from "./views/Home";
import SearchCity from './views/SearchCity';
import * as colors from "./config/theme.json";
import useReduxState from './hooks/useReduxState';
import { root } from '.eslintrc';

export type StackParamList = {
    Home: undefined,
    City: undefined,
    SearchCity: undefined,
};

const Stack = createStack<StackParamList>();



const AppNavigator = () => {
    const { app: { headerTitle} } = useReduxState() 
    return(

        <Stack.Navigator initialRouteName='Home'
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primaryColor,
                },
                headerTintColor: colors.whiteColor,
            }}
        >

            <Stack.Screen name="Home"
                component={Home}
                options={{
                    title: "Cidades"
                }}
            />

            <Stack.Screen name="City"
                component={City}
                options={({ route }) => ({
                    title:  headerTitle ?  headerTitle : route.name
                })}
            />

            <Stack.Screen name="SearchCity"
                component={SearchCity}
                options={{
                    title: "Adicione uma cidade"
                }}
            />

        </Stack.Navigator>
    )
}

export default AppNavigator;