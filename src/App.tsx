import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import AppNavigator from "./navigationStack";


export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        )
    }
}

