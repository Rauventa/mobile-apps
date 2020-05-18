import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {IntroScreen} from "../screens/IntroScreen";
import {ReviewScreen} from "../screens/ReviewScreen";
const Navigator = createStackNavigator({
    Intro: IntroScreen,
    Review: ReviewScreen
},{
    initialRouteName: 'Intro',
    defaultNavigationOptions: {
        headerTransparent: true,
        headerShown: false
    }
});

export const AppNavigation = createAppContainer(Navigator);