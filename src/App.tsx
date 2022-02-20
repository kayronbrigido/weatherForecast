import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "@services/NavigationService";
import React, { Component } from "react";
import AppNavigator from "./navigationStack";
import { Provider } from "react-redux"
import reduxStore from "@src/store/redux-store/index"

export default class App extends Component {
    render() {
        return (

            <Provider store={reduxStore}>
                <NavigationContainer ref={navigationRef}>
                    <AppNavigator />
                </NavigationContainer>
            </Provider>

        )
    }
}

