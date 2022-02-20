import { createStackNavigator } from "@react-navigation/stack";
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export const navigate = (routeName: string, params: any = {}) => {
    if(navigationRef.isReady()) {
        navigationRef.navigate(routeName, params);
    }
}

export const createStack = createStackNavigator;