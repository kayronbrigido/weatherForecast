import * as React from 'react';

import { createStack } from "./services/NavigationService"
import City from "./views/City";
import Home from "./views/Home";
import SearchCity from './views/SearchCity';
import * as colors from "./config/theme.json";

const Stack = createStack();

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
            headerStyle: {
                backgroundColor: colors.primaryColor,
            },
            headerTintColor: colors.whiteColor,
            headerTitle: "Cidades"
        }}/>

        <Stack.Screen name="City" component={City} />

        <Stack.Screen name="SearchCity" component={SearchCity} options={{
            headerStyle: {
                backgroundColor: colors.primaryColor
            },
            headerTintColor: colors.whiteColor,
            headerTitle: "Cidades"
        }}/>

    </Stack.Navigator>
)

export default AppNavigator;