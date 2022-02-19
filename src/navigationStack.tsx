import * as React from 'react';

import { createStack } from "./services/NavigationService"
import City from "./views/City";
import Home from "./views/Home";
import SearchCity from './views/SearchCity';

const Stack = createStack();

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="City" component={City} />
        <Stack.Screen name="SearchCity" component={SearchCity} />
    </Stack.Navigator>
)

export default AppNavigator;