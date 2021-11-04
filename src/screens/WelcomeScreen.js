import React from "react";
import {Text, Image, StyleSheet,View,TouchableOpacity} from "react-native";

const WelcomeAppScreen = (props)=>{
	return <View style = {styles.background}>
		   <View style = {styles.circleShape}/>
				<Text style = {styles.welcomeText}>Welcome!</Text>
				<View>
					<TouchableOpacity onPress = {function(){props.navigation.navigate("Login")}}>
						<Text style = {styles.loginButton}>Login</Text>
					</TouchableOpacity>
				</View>
			<View>
				<TouchableOpacity onPress = {function(){props.navigation.navigate("Signup")}}>
					<Text style = {styles.signUpButton}>Don't have an account? Sign Up</Text>
				</TouchableOpacity>
			</View>
	</View>
};

const styles = StyleSheet.create({
	background:{
		backgroundColor: "orange",
		height:800,
		alignItems:"stretch"
	},
	loginButton:{
		marginHorizontal:70,
		borderColor:"blue",
		paddingHorizontal:80,
		fontSize:25,
		fontStyle:"italic",
		borderColor:"skyblue",
		borderWidth: 5,
		borderRadius:15,
		width:250,
		alignSelf: "center"
	},
	signUpButton:{
		fontSize:20,
		marginVertical: 145,
		borderWidth:2,
		borderColor:"purple",
		padding:10,
		borderRadius:9
	},
	welcomeText: {
		fontSize:45,
		fontStyle:"italic",
		margin:50,
		marginLeft:100,
	},
	circleShape: {
		width:200,
		height:200,
		borderRadius:200/2,
		backgroundColor:"blue",
		marginLeft: 100,
		marginTop:150,
		borderWidth:5,
		borderColor:"skyblue"
	}
});

export default WelcomeAppScreen;