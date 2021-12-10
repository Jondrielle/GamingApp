import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Alert, ScrollView,TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IconTextImageDetail from "../components/IconTextImageDetail";
import LoginButtonDetail from "../components/LoginButtonDetail";
import LogoDetail from '../../assets/logo/GameNet2.mp4';
import {Video} from "expo-av";


let user = {
	username: '',
	password: '',
	email: '',
	code: ''
}

/* 
	This file is for signing up as user 
*/
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
		try{
		const keys = await AsyncStorage.getAllKeys();
		for (const key of keys) {
			console.log('user ' + count++);
			const val = await AsyncStorage.getItem(key);
			if (key !== user.code) {
				result = true
				Alert.alert('cannot use that password')
			}
		}
	}catch(e){console.log(e+"line 62 sign uo screen");}
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
			Alert.alert('Warning!', 'Enter your info')
		} else {
			try {
				console.log(typeof user, typeof securedCode.code)
				await AsyncStorage.setItem(securedCode.code, JSON.stringify(user));
			} catch (error) {
				console.log(error);
			}
		}
	}

	return <View style={styles.background}>
			<View style={styles.container}>
				<Text style={styles.signupStyle}>Sign Up</Text>
				<IconTextImageDetail title='Code'
					placeholder='Enter Code'
					image='code'
					viewInput={true}
					handler={function (newText) { setSecuredCode({ ...securedCode, code: newText }); user = { ...user, code: newText } }}
				/>
				<Text style={styles.errorStyle}>{securedCode.code.length > 3 ? null : 'code cannot be less than 4 characters'}</Text>
				<IconTextImageDetail title='Username'
					placeholder='Enter Username'
					image='user'
					viewInput={false}
					handler={function (newText) { setUserName(newText); user = { ...user, username: newText } }}
				/>
				<Text style={styles.errorStyle}>{username.length > 4 ? null : 'username cannot be less than 4 characters'}</Text>
				<IconTextImageDetail title='Password'
					placeholder='Enter Password'
					image='key'
					viewInput={true}
					handler={function (newText) { setPassWord(newText); user = { ...user, password: newText } }}
				/>
				<Text style={styles.errorStyle}>{password.length > 4 ? null : 'password cannot be less than 4 characters'}</Text>
				<IconTextImageDetail title='Verify Password'
					placeholder='Enter matching Password'
					image='key'
					viewInput={true}
					handler={function (newText) { setVerifyPassWord(newText) }}
				/>
				<Text style={styles.errorStyle}>{verifypassword === password ? null : 'password is not a match'}</Text>
				<IconTextImageDetail title='Email'
					placeholder='Enter email'
					image='mail'
					viewInput={false}
					handler={function (newText) { setEmail(newText); user = { ...user, email: newText } }}
				/>
				<Text style={styles.errorStyle2}>{email.length > 8 ? null : 'email cannot be less than 8 characters'}</Text>
			
				<LoginButtonDetail 
					colorChange ={true}
					title='Confirm'
					handler={() => {
						{
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
								if (password.length > 3) {
									setPassWord(password)
									isValidPassword = true
								} else
									Alert.alert('password characters must be greater than 0');
							} else {
								Alert.alert('password does not match !! try again');
							}

							//verifying the password 
							if (email !== '') {
								if (email.length > 8) {
									setEmail(email)
									isValidEmail = true
								} else
									Alert.alert('email characters must be greater than 8 ');
							} else {
								Alert.alert('email cannot be empty');
							}
							// verifying the username
							if (username !== '') {
								if (username.length > 3) {
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
									setData()
									storageGet(securedCode.code)
									getAll()
									props.navigation.navigate("option");
								}
							}
						}
					}} 
				/>
				<View style={styles.signUpView}>
					<Text style={styles.signUpText1}>Already have an account ?</Text>
					<Pressable onPress={() => {
						props.navigation.navigate('Login')
					}}>
						<Text style={styles.signUpText2}>Sign In</Text>
					</Pressable>
				</View>
		</View>
		<Video
			style={styles.circleicon}
			source={require('../../assets/logo/GameNet2.mp4')}
			isLooping ={true}
			//useNativeControls
			resizeMode="contain"
			shouldPlay
		/>
	</View>
};

const styles = StyleSheet.create({

	loginButton: {
		marginHorizontal: 70,
		paddingHorizontal: 80,
		fontSize: 25,
		fontStyle: "italic",
		borderColor: "skyblue",
		borderWidth: 5,
		borderRadius: 15,
		width: 250,
		alignSelf: "center",
		height: 10,
		marginTop: 25
	},
	container: {
		flex: 1,
		backgroundColor: '#b7eecf',
		borderColor: '#b7eecf',
		margin: 3,
		borderWidth: 4,
		width:350,
		paddingTop: 50
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
		marginTop: 100,
		height: 450,
		borderRadius: 5,
		backgroundColor: '#1B322D',
	},
	background: {
		flex: 1,
		backgroundColor: '#b7eecf',
		alignItems:'center'
	},
	signupStyle: {
		alignSelf: 'center',
		fontSize: 40,
		marginBottom: 10,
		color:'black'
	},
	errorStyle: {
		color: 'red',
		marginLeft: 35
	},
	errorStyle2: {
		color: 'red',
		marginLeft: 35,
		marginBottom: 30
	},
	signUpView: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 25,
	},
	signUpText1: {
		fontSize: 20,
		color:'skyblue'
	},
	signUpText2: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 10,
		marginRight: 35,
		color:'#3063a0',
	},
	circlebackground: {
		backgroundColor: "#1B322D"		
	},		
	circleShape: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		backgroundColor: "blue",
		marginLeft: 10,
		justifyContent: 'center',
		marginTop: 2,
		borderWidth: 5,
		borderColor: "blue",
		bottom:-20,
		right:-10
	},
	circleicon: {
		width: 100,
		height: 100,
		borderRadius: 100 / 2,
		alignSelf: 'center',
        justifyContent:'center',
		position: "absolute",
		marginTop: 700
	}
});
export default SignUpScreen;

