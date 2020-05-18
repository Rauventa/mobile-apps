import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {IntroScreen} from "../screens/IntroScreen";
import {GameScreen} from "../screens/GameScreen";

const Navigator = createStackNavigator({
    Intro: IntroScreen,
    Game: GameScreen
},{
    initialRouteName: 'Intro'
});

export const AppNavigation = createAppContainer(Navigator);