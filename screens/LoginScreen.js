import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, StyleSheet, View, Pressable, Alert } from "react-native";
import { useState, useEffect } from "react";
import IconTextImageDetail from "../components/IconTextImageDetail"
import LoginButtonDetail from "../components/LoginButtonDetail";
import ForgotButtonDetail from "../components/ForgotButtonDetail"
// setting the state of individual code to false
let isCode = false

const isValidCode = async function (item) {

	let isValid = false
	let count = 0

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
			<Text style={styles.screenTitle}>Sign In</Text>

			<IconTextImageDetail title='Code'
				placeholder='Enter Code'
				image='code'
				viewInput={true}
				handler={function (newText) {

					setCode(newText),
						verdict(isValidCode(newText))

				}} />
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
				}} />


			<View style = {styles.buttonsView}>
				<LoginButtonDetail title='Login'
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

											props.navigation.navigate('user', data)

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
	</View>
};

const styles = StyleSheet.create({
	background: {
		alignItems: "center",
		backgroundColor: 'orange',
		flex: 1

	},
	innerBackground: {

		alignSelf: 'center',
		borderWidth: 4,
		width: 350,
		marginTop: 50,
		height: 650,
		borderRadius: 5,
		backgroundColor: 'orange'

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
		marginTop: 100,

	},
	signUpText1: {
		fontSize: 20,

	},
	signUpText2: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 10,
		marginRight: 20
	},
	buttonsView:{
		marginTop:30
	}


});




export default LoginScreen;