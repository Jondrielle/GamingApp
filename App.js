import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import React from "react";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SplashScreen from "./src/screens/SplashScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";
import TabNavigationRoutes from "./src/components/TabNavigationRoutes";
import {Provider as GameProvider} from "./src/context/GameContext";
import ResultsShowScreen from "./src/components/ResultsShowScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import UserScreen from "./src/screens/UserScreen";
import UniqueKeyScreen from "./src/screens/UniqueKeyScreen"
import TutorialOptionScreen from "./src/screens/TutorialOptionScreen";
import VideoPlayerScreen from "./src/screens/VideoPlayerScreen";
import IndexScreen from "./src/screens/IndexScreen";

// A Stack Navigator for authentication screens and tutorial 
const AuthStack = createStackNavigator({
	Welcome: WelcomeScreen,
	//Game:GameShowScreen,
	Profile: UserScreen,
	Results:ResultsShowScreen,
	reset:ResetPasswordScreen,
    user: {
		screen: UserScreen,
		headerShown: false,
		title: ""
	},
    unique:{
		screen: UniqueKeyScreen,
		navigationOptions: {
			title: "Veirfy your code"
		}
	},
	option:{
		screen: TutorialOptionScreen,
		navigationOptions: {
			title: "Tutorials",
			headerLeft:null,
		}
	},
    player:VideoPlayerScreen,
	index:IndexScreen,
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			headerShown: false
		}
	},
	Signup: {
		screen: SignUpScreen,
		navigationOptions: {
			title: "",
			headerTransparent: true
		}
	},
},
{
	initialRouteName: "Login",	
});

const App = createAppContainer(
	createSwitchNavigator({
		// Plays for 5 seconds on the opening of the app 
		Splash: {
			screen: SplashScreen,
		},
		//Stack Navigation route
		Auth: {
			screen: AuthStack
		},
		//Tab Navigation route
		Tab: {
			screen: TabNavigationRoutes
		},
	},
	{
		initialRouteName: "Splash",
	})
);

export default () => {
	return <GameProvider>
		<App/>
	</GameProvider>
}