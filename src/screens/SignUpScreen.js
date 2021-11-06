import React, {useState} from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from "react-native";
import TutorialScreen from "../screens/TutorialScreen";
import UserNameInput from "../components/UserNameInput";
import PasswordInput from "../components/PasswordInput";
import UserEmailInput from "../components/UserEmailInput";


const SignUpScreen = (props)=>{
	const [userName, setUserName] = useState('');
	const [userPassword, setUserPassword] = useState('');
	const [userEmail, setUserEmail] = useState('');

	return <View style={styles.topView}>
		<Text style= {styles.createAccountText}>Create account</Text>

		{/* Username input box */}
		<View style={styles.userView}>
		<UserNameInput theUserName={userName} onTermChange={(newTerm) => setUserName(newTerm)}/>
		</View>

		{/* Password input box */}
		<View style={styles.passView}>
		<PasswordInput userPass={userPassword} onTermChange={(newTerm) => setUserPassword(newTerm)}/>
		</View>

		{/* Email input box */}
		<View style={styles.emailView}>
		<UserEmailInput userEmail={userEmail} onTermChange={(newTerm) => setUserEmail(newTerm)}/>
		</View>

		<TouchableOpacity onPress = {function(){props.navigation.navigate("Tutorial")}} style={styles.createButton}>
			<Text style={{color: "white", fontSize: 25, fontWeight: "bold"}}>Create</Text>
		</TouchableOpacity>
	</View>
};

const styles = StyleSheet.create({
	topView: {
		marginTop: 100,
		flex: 1
	},
	createAccountText: {
		fontWeight: "bold",
		alignSelf: "center",
		fontSize: 40,

	},
	//username View style
	userView: {
		marginTop: 105,
		marginHorizontal: 15
	},
	//password View style
	passView: {
		marginTop: 20,
		marginHorizontal: 15
	},
	//email View style
	emailView: {
		marginTop: 20,
		marginHorizontal: 15
	},
	//create button style
	createButton: {
		marginTop: 150,
		marginHorizontal: 15,
		backgroundColor: "black",
		alignItems: "center",
		justifyContent: "center",
		height: 60,
		borderRadius: 50,
		elevation: 15,
        shadowColor: "black",
	},
});

export default SignUpScreen;