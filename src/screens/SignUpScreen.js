import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from "react-native";
import SignUpInfo from "../components/SignUpInfo";
import TutorialScreen from "../screens/TutorialScreen";

const SignUpScreen = (props)=>{
	return <View>
		<SignUpInfo title = "Username"/>
		<SignUpInfo title = "Email"/>
		<SignUpInfo title = "Password"/>
		<SignUpInfo title = "Verify Password"/>
		<TouchableOpacity onPress = {function(){props.navigation.navigate("Tutorial")}}>
			<Text>Confirm</Text>
		</TouchableOpacity>
	</View>
};

const styles = StyleSheet.create({

});
export default SignUpScreen;