import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert, Button } from "react-native";
import SignUpInfo from "../components/SignUpInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TutorialScreen from "../screens/TutorialScreen";


let user = {
	username: '',
	password: '',
	email: '',
	code: ''
}

const SignUpScreen = (props) => {

	const [username, setUserName] = useState('')
	const [password, setPassWord] = useState('')
	const [email, setEmail] = useState('')
	const [verifypassword, setVerifyPassWord] = useState('')
	const [securedCode, setSecuredCode] = useState({ code: '' })

	user = {

		username: username,
		password: password,
		email: email,
		code: securedCode
	}

	const getAll = async () => {
		let result = []
		try {
			let count = 0
			const keys = await AsyncStorage.getAllKeys();
			for (const key of keys) {
				console.log('user ' + count++);
				const val = await AsyncStorage.getItem(key);
				console.log('key' + key, 'val' + val)
				result[val]
			}
			return result;
		} catch (error) {
			alert(error);
		}
	};

	const keyExist = async function () {

		let result = false;
		const keys = await AsyncStorage.getAllKeys();
		for (const key of keys) {
			console.log('user ' + count++);
			const val = await AsyncStorage.getItem(key);
			if (key !== user.code) {
				result = true
				Alert.alert('cannot use that password')
			}
		}

		return result;
	}


	const storageGet = async () => {
		try {
			const result = await AsyncStorage.getItem(securedCode.code);
			console.log(result);
			return result;
		} catch (error) {
			console.log(error);
		}
	};


	const setData = async () => {
		if (user === null) {
			Alert.alert('Warning!', 'Please write your data.')
		} else {
			try {
				console.log(typeof user, typeof securedCode.code)
				await AsyncStorage.setItem(securedCode.code, JSON.stringify(user));
				props.navigation.navigate('Welcome', user);
			} catch (error) {
				console.log(error);
			}
		}
	}

	return <View style={styles.background}>

		<View style={styles.container}>
			<Text style={styles.signupStyle}>Sign Up</Text>
			<SignUpInfo title="Username           "
				textArea={function (newText) { setUserName(newText); user = { ...user, username: newText } }} />
			<SignUpInfo title="Email                   "
				textArea={function (newText) { setEmail(newText); user = { ...user, email: newText } }} />
			<SignUpInfo title="Password            "
				textArea={function (newText) { setPassWord(newText); user = { ...user, password: newText } }} />
			<SignUpInfo title="Verify Password"
				textArea={function (newText) { setVerifyPassWord(newText) }} />
			<SignUpInfo title="Enter 4 code       "
				textArea={function (newText) { setSecuredCode({ ...securedCode, code: newText }); user = { ...user, username: newText } }} />
			<TouchableOpacity style={styles.loginButton}
				onPress={function () {

					let isValidUsername = false;
					let isValidPassword = false;
					let isValidEmail = false;
					let isValidCode = false;

					if (securedCode.code.length > 3) {
						isValidCode = true

					} else {
						Alert.alert('code cant be less than 4 characters')
					}
					//verifying the email
					if (verifypassword === password) {
						//props.navigation.navigate('Welcome')
						if (password.length > 0) {
							setPassWord(password)
							isValidPassword = true
						} else
							Alert.alert('password characters must be greater than 0');

					} else {
						Alert.alert('password does not match !! try again');
					}

					//verifying the password 

					if (email !== '') {
						
						if (email.length > 0) {

							setEmail(email)
							isValidEmail = true

						} else
							Alert.alert('email characters must be greater than 0 ');

					} else {
						Alert.alert('email cannot be empty');
					}

					// verifying the username
					if (username !== '') {

						if (username.length > 0) {

							setUserName(username)
							isValidUsername = true

						} else {
							Alert.alert("Username characters must be greater than 0 ")
						}

					} else {
						Alert.alert('Username cannot be empty');
					}

					if ((isValidEmail && isValidPassword && isValidUsername && isValidCode) === true) {

						if (keyExist()) {
							console.log(user);
							setData()
							console.log(securedCode.code)
							storageGet(securedCode.code)
							getAll()

							props.navigation.navigate('Welcome', user)

						}
					}

				}} >
				<Text style={styles.confirmText}>Confirm</Text>

			</TouchableOpacity>
		

		</View>
	</View>
};

const styles = StyleSheet.create({

	loginButton: {
		marginHorizontal: 70,
		borderColor: "blue",
		paddingHorizontal: 80,
		fontSize: 25,
		fontStyle: "italic",
		borderColor: "skyblue",
		borderWidth: 5,
		borderRadius: 15,
		width: 250,
		alignSelf: "center",
		height:30,
		marginTop:100

	},

	container: {
		flex: 1,
		backgroundColor: 'orange',
		borderColor: 'black',
		margin: 20,
		borderWidth: 4

	},
	confirmStyle: {
	
		alignSelf: 'center',
		marginTop: 200,
		width: 70,
		height: 70,
		backgroundColor: '#00BCD4',
		borderRadius: 50,
		transform: [
			{ scaleX: 2 },]
	},
	confirmText: {
		alignSelf: 'center',
		marginTop: 2
	},
	innerBackground: {
		borderWidth: 4,
		width: 325,
		marginTop: 110,
		height: 550,
		borderRadius: 5,
		backgroundColor: 'orange'

	},

	background: {
		flex: 1,
		backgroundColor: 'orange'
	},
	signupStyle: {
		alignSelf: 'center',
		fontSize: 50,
		marginBottom: 20
	}

});
export default SignUpScreen;