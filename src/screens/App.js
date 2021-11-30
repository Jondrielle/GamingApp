import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TutorialScreen from "./src/screens/TutorialScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";
import UserScreen from "./src/screens/UserScreen";
import UniqueKeyScreen from "./src/screens/UniqueKeyScreen"
import TutorialOptionScreen from "./src/screens/TutorialOptionScreen";
import VideoPlayerScreen from "./src/screens/VideoPlayerScreen";
import IndexScreen from "./src/screens";
const navigator = createStackNavigator(
  
  {
   Welcome: WelcomeScreen,
  Tutorial: TutorialScreen,
  Login: LoginScreen,
  Signup: SignUpScreen,
  reset:ResetPasswordScreen,
  user:UserScreen,
  unique:UniqueKeyScreen,
  option:TutorialOptionScreen,
  player:VideoPlayerScreen,
  index:IndexScreen
},
  {
    initialRouteName: "index",
    defaultNavigationOptions: {
      title: "GAMENET",
      //headerLeft:""
    }

  });

export default createAppContainer(navigator);