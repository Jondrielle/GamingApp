import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TutorialScreen from "./src/screens/TutorialScreen";
import SplashScreen from "./src/screens/SplashScreen";
import TabNavigationRoutes from "./src/components/TabNavigationRoutes";

// A Stack Navigator for authentication screens and tutorial 
const AuthStack = createStackNavigator({
	Tutorial: TutorialScreen,
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

export default createAppContainer(
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