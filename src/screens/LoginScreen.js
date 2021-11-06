import React, {useState} from "react";
import {Text,StyleSheet,View,TouchableOpacity,TextInput} from "react-native";
import UserNameInput from "../components/UserNameInput";
import PasswordInput from "../components/PasswordInput";


const LoginScreen = (props)=>{
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');

	return <View style = {styles.background}>
			<View style = {styles.innerBackground}>
				<Text style = {styles.screenTitle}>Hello</Text>
				<Text style = {{fontWeight: "bold", fontSize: 22, left: 55}}>Sign into your account</Text>

				{/* Username input box */}
				<View style={styles.userNameStyle}>
					<UserNameInput 
					theUserName={userName} 
					onTermChange={(newTerm) => setUserName(newTerm)}
					/>
				</View>
				

				{/* Password input box */}
				<View style={styles.passwordStyle}>
					<PasswordInput 
					userPass={userPassword} 
					onTermChange={(newTerm) => setUserPassword(newTerm)}
					/>
				</View>

				<TouchableOpacity style={styles.loginButton} onPress={function(){props.navigation.navigate("Tab")}}>
					<Text style={styles.loginText}>Sign in</Text>
				</TouchableOpacity>
				{/* Create account prompt*/}
				<Text style={{marginTop: 200, fontSize: 19, alignSelf: "center"}}>
					Don't have an account?   
				</Text>
				<TouchableOpacity style={{alignSelf: "center"}} onPress={function(){props.navigation.navigate("Signup")}} >
					<Text style={{fontWeight: "bold", textDecorationLine: "underline", fontSize: 19}}>
						Create
					</Text>
				</TouchableOpacity>
				
			</View>
	</View>
};

const styles = StyleSheet.create({
	background:{
		alignItems: "center"
	},
	innerBackground:{
		width:365,
		marginTop: 50,
		height:780,
		borderRadius: 5
	},
	screenTitle:{
		fontSize: 100,
		fontWeight: "bold",
		height: 130,
		alignSelf: "center"
	},

	//username input styles
	userNameStyle: {
		marginTop: 110
	},

	//password input styles
	passwordStyle: {
		marginTop: 30
	},

	//login button styles
	loginButton:{
		backgroundColor: "black",
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center",
		height: 60,
		borderRadius: 50,
		marginHorizontal: 10,
		elevation: 15,
        shadowColor: "black",
	},
	loginText: {
		fontWeight: "bold",
		fontSize: 25, 
		color: "white"
	}
});

export default LoginScreen;