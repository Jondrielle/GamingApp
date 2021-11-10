import React, {useState} from "react";
import {Text,StyleSheet,View,TouchableOpacity,TextInput,Input} from "react-native";
import UserNameInput from "../components/UserNameInput";
import PasswordInput from "../components/PasswordInput";
import RoundButton from "../components/RoundButton";
import TextButton from "../components/TextButton";
import UserTextInputView from "../components/UserTextInputView";


const LoginScreen = (props)=>{
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');

	return <View style = {styles.background}>
			<View style = {styles.innerBackground}>
				<View style = {styles.textBackground}>
					<Text style = {styles.screenTitle}>Hello</Text>
					<Text style = {{fontWeight: "bold", fontSize: 22, left: 55}}>Sign into your account</Text>
				</View>

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

				<TouchableOpacity>
					<TextButton text = "Forgot Password?"/>
				</TouchableOpacity>

				<TouchableOpacity onPress={function(){props.navigation.navigate("Tab")}}>
					<RoundButton title = "Sign In"/>
				</TouchableOpacity>

				{/* Create account prompt*/}
				<Text style={{marginTop: 30, fontSize: 19, alignSelf: "center"}}>
					Don't have an account?   
				</Text>
				<TouchableOpacity style={{alignSelf: "center"}} onPress={function(){props.navigation.navigate("Signup")}} >
					<Text style={{fontWeight: "bold",color:"#365544", fontSize: 19}}>
						Register
					</Text>
				</TouchableOpacity>
				
			</View>
	</View>
};

const styles = StyleSheet.create({
	background:{
		alignItems: "center",
		backgroundColor:"#D3D3D3"
	},
	//textBackground:{
		//backgroundColor:"#365544",
		//height:250,
	//	borderRadius:35
	//},

	innerBackground:{
		width:380,
		marginTop: 50,
		height:800,
		borderRadius: 50,
	},
	screenTitle:{
		fontSize: 100,
		fontWeight: "bold",
		height: 130,
		alignSelf: "center",
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
		backgroundColor: "#365544",
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center",
		height: 60,
		borderRadius: 50,
		marginHorizontal: 10,
		elevation: 15,
        shadowColor: "black",
	},
});

export default LoginScreen;