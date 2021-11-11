import React, { Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, StyleSheet, View, TouchableOpacity, TextInput, Pressable, Alert } from "react-native";
import SignUpInfo from "../components/SignUpInfo";
import { useState,useEffect } from "react";

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
			<SignUpInfo title="code           "
				textArea={function (newText) {

					setCode(newText),
						verdict(isValidCode(newText))

				}} />
			<SignUpInfo title="Username  "
				textArea={function (newText) {

					setUserName(newText)

				}} />
			<SignUpInfo title="Password   "
				textArea={function (newText) {

					setPassWord(newText)
				}} />

			<Pressable 
				onPress={() => {
					props.navigation.navigate('unique')
				}}>
				<Text style={styles.forgotButton} > Forgot Password</Text>
			</Pressable>
			<TouchableOpacity style={styles.login}
				onPress={async () => {
					if (username.length > 0 && password.length > 0 && code.length > 0) {
						if (isCode) {
							try {
								const val = await AsyncStorage.getItem(code);
								let data = JSON.parse(val);						
								if(data.username === username){
									if(data.password === password){
									
										 AsyncStorage.setItem('LoggedOn','logged')
										 AsyncStorage.setItem('CurrentUserKey',val)
										 AsyncStorage.setItem('CurrentUser',JSON.stringify(data))

										props.navigation.navigate('user',data)

									}else{

										Alert.alert('password is incorrect = ' + password);
										console.log('password is incorrect ' + password);
									}

								}else{
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
				}}>
				<Text style={styles.loginText}>Login</Text>
			</TouchableOpacity>


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
		
		alignSelf:'center',
		borderWidth: 4,
		width: 350,
		marginTop: 50,
		height: 650,
		borderRadius: 5,
		backgroundColor: 'orange'

	},
	screenTitle: {
		alignSelf: "center",
		fontSize: 30
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
		height:40,
		marginTop:-100
		

	},
	loginText: {
		alignSelf: 'center',
		marginTop: 5,
		fontSize: 20,
		fontStyle:'italic',
		fontWeight: 'bold',


	},
	forgotTextStyle: {
		fontWeight: 'bold',
		backgroundColor: 'red',

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
		height:30,
		marginTop:170,

	},

});




export default LoginScreen;