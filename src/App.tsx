import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "@services/NavigationService";
import React, { Component } from "react";
import AppNavigator from "./navigationStack";


export default class App extends Component {
    render() {
        return (
            <NavigationContainer ref={navigationRef}>
                <AppNavigator />
            </NavigationContainer>
        )
    }
}

