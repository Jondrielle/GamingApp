import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TutorialScreen from "./src/screens/TutorialScreen";

const navigator = createStackNavigator({
	Welcome: WelcomeScreen,
	Tutorial: TutorialScreen,
	Login:LoginScreen,
	Signup: SignUpScreen,
	//User: UserScreen
},
{
	initialRouteName: "Welcome",
	defaultNavigationOptions: {
		title: "Gaming App"
	}

});

export default createAppContainer(navigator);