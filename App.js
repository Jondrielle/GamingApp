import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TutorialScreen from "./src/screens/TutorialScreen";
import GameDetailScreen from "./src/screens/GameDetailsScreen";
import TabNavigatorHelper from "./src/components/TabNavigatorHelper";

const TabNavigator = TabNavigatorHelper;

const navigator = createStackNavigator({
	Welcome: WelcomeScreen,
	Tutorial: TutorialScreen,
	Login:LoginScreen,
	Signup: SignUpScreen,
	Details: GameDetailScreen,
	Tabs: {
		screen: TabNavigator,
		navigationOptions: {
			title: "Home",
			header: () => {}
		},
		
		
	}
	//User: UserScreen
},
{
	initialRouteName: "Welcome",
	defaultNavigationOptions: {
		title: "Gaming App"
	}

});

export default createAppContainer(navigator);