import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, StyleSheet, View, Pressable, Alert } from "react-native";
import { useState, useEffect } from "react";
import IconTextImageDetail from "../components/IconTextImageDetail"
import LoginButtonDetail from "../components/LoginButtonDetail";
import ForgotButtonDetail from "../components/ForgotButtonDetail";
import TabNavigationRoutes from "../components/TabNavigationRoutes";
import {Video} from "expo-av";


// setting the state of individual code to false
let isCode = false

const isValidCode = async function (item) {

	let isValid = false
	let count = 0

	try {
		//retrieving all the keys from async storage
		const keys = await AsyncStorage.getAllKeys();
		for (const key of keys) {

			//code is true if key is present in storage
			if (item === key) {
				isValid = true
				isCode = true

			}

			const val = await AsyncStorage.getItem(key);
			//convert object as string representation to object using
			let data = JSON.parse(val);

		}
	} catch (e) {
		console.log(e);
	}
		return isValid;
	
}

const getAsyncStorage = async (key) => {
	try {
		isValidCode(key)

		const getAsyncStorageData = await AsyncStorage.getItem(key);
		//isValidCode(key)
		const getAsyncStorageParsed = JSON.parse(getAsyncStorageData);


		return getAsyncStorageParsed;
	} catch (error) {
		console.warn(error);
	}
}

const LoginScreen = (props) => {
	const [username, setUserName] = useState('')
	const [password, setPassWord] = useState('')
	const [code, setCode] = useState('')
	const [isCode, verdict] = useState(true)



	return <View style={styles.background}>
			<View style={styles.innerBackground}>

			<Text style={styles.signinStyle}>Sign In</Text>

			<View style={styles.inputStyle}>
				<IconTextImageDetail title='Code'
					placeholder='Enter Code'
					image='code'
					viewInput={true}
					handler={function (newText) {
						setCode(newText),
						verdict(isValidCode(newText))
					}}
				/>
				<IconTextImageDetail title='Username'
					placeholder='Enter Username'
					image='user'
					viewInput={false}
					handler={function (newText) {
						setUserName(newText)
					}}
				/>
				<IconTextImageDetail title='Password'
					placeholder='Enter Password'
					image='key'
					viewInput={true}
					handler={function (newText) {
						setPassWord(newText)
					}}
				/>
			</View>


			<View style={styles.buttonsView}>
				<LoginButtonDetail title='Login'
				    colorChange = {true}
					handler={async () => {
						console.log(username, password, code);
						if (username.length > 0 && password.length > 0 && code.length > 0) {
							if (isCode) {
								try {
									const val = await AsyncStorage.getItem(code);
									let data = JSON.parse(val);
									if (data.username === username) {
										if (data.password === password) {

											AsyncStorage.setItem('LoggedOn', 'logged')
											AsyncStorage.setItem('CurrentUserKey', val)
											AsyncStorage.setItem('CurrentUser', JSON.stringify(data))

											props.navigation.navigate("Tab")

										} else {

											Alert.alert('password is incorrect = ' + password);
											console.log('password is incorrect ' + password);
										}

									} else {
										Alert.alert('no username matches = ' + username)
										console.log('no username matches ' + username);
									}


								} catch (e) { console.log(e); }


							} else {
								Alert.alert('code is incorrect')
								console.log('code is incorrect');
							}
						} else {
							Alert.alert('all three fields must be filled')
							console.log('all three fields must be filled');
						}

					}
					}
				/>

				<ForgotButtonDetail title='forgot password ?'
					handler={() => {
						props.navigation.navigate('unique')
					}
					}
				/>

			</View>

			<View style={styles.signUpView}>
				<Text style={styles.signUpText1}>Don't have an account ?</Text>

				<Pressable onPress={() => {

					props.navigation.navigate('Signup')
				}}>
					<Text style={styles.signUpText2}>Sign Up</Text>

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
	background: {
		backgroundColor: "#b7eecf",//Green: #1B322D Blue: #0c7078 LightGreen: #f5fffa
		flex: 1,

	},
	innerBackground: {

		alignSelf: 'center',
		width: 350,
		height:710,
		marginTop: 50,
		borderRadius: 5,
		backgroundColor: '#b7eecf',//#1B322D
		borderWidth:5,
		borderColor:"#b7eecf"

	},
	
	screenTitle: {
		alignSelf: "center",
		fontSize: 30,
		marginBottom: 80
	},
	login: {
		marginHorizontal: 70,
		borderColor: "blue",
		paddingHorizontal: 5,
		fontSize: 25,
		fontStyle: "italic",
		borderColor: "skyblue",
		borderWidth: 5,
		borderRadius: 15,
		width: 250,
		alignSelf: "center",
		height: 40,
		marginTop: 100


	},
	loginText: {
		alignSelf: 'center',
		marginTop: 5,
		fontSize: 20,
		fontStyle: 'italic',
		fontWeight: 'bold',


	},

	forgotButton: {
		marginHorizontal: 70,
		borderColor: "blue",
		paddingHorizontal: 30,
		fontSize: 25,
		fontStyle: "italic",
		borderColor: "skyblue",
		borderWidth: 5,
		borderRadius: 15,
		width: 250,
		alignSelf: "center",
		height: 30,
		marginTop: 170,

	},
	signUpView: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 20,

	},
	signUpText1: {
		fontSize: 20,
		color:'black',
		marginBottom:100,

	},
	signUpText2: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 10,
		marginRight: 20,
		color:'#dc143c',

	},
	buttonsView: {
		marginTop: 40,
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
	},
	
	signinStyle: {
		alignSelf: 'center',
		fontSize: 40,
		marginBottom: 12,
		color:'black',

	},
	inputStyle: {
		//borderWidth: 3,
		height: 355, 
		justifyContent: "space-evenly", 
	}


});




export default LoginScreen;