import * as React from 'react';

import { createStack } from "./services/navigationService"
import City from "./views/City";
import Home from "./views/Home";

const Stack = createStack();

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="City" component={City} />
    </Stack.Navigator>
)

export default AppNavigator;