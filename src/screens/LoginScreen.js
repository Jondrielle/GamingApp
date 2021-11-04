import React from "react";
import {Text,StyleSheet,View,TouchableOpacity,TextInput} from "react-native";
import SignUpInfo from "../components/SignUpInfo";

const LoginScreen = (props)=>{
	return <View style = {styles.background}>
			<View style = {styles.innerBackground}>
				<Text style = {styles.screenTitle}>Sign In</Text>
				<SignUpInfo title = "Email"/>
				<SignUpInfo title = "Password"/>
				<TouchableOpacity>
					<Text>Login</Text>
				</TouchableOpacity>
			</View>
	</View>
};

const styles = StyleSheet.create({
	background:{
		alignItems: "center"
	},
	innerBackground:{
		borderWidth:4,
		width:325,
		marginTop: 110,
		height:550,
		borderRadius: 5
	},
	screenTitle:{
		alignSelf:"center",
		fontSize: 30
	}
});

export default LoginScreen;