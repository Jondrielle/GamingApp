import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity, Alert } from "react-native";

const isLoggedOn = async function (props) {

	if (isValidCode('LoggedOn')) {
		try {

			const userKey = await AsyncStorage.getItem('CurrentUserKey')
			const user = await AsyncStorage.getItem('CurrentUser')
			console.log(userKey, typeof await AsyncStorage.getItem('CurrentUserKey'));

			if (user !== null || user !== undefined) {
				const userObject = JSON.parse(user);

				if (userObject === null) {
				} else {
					props.navigation.navigate('user', userObject)

				}
			}

		} catch (error) {
			console.warn(error);
		}

	}

}

const isValidCode = async function (item) {

	let isValid = false
	let count = 0
	try {
		const keys = await AsyncStorage.getAllKeys();
		for (const key of keys) {
			console.log('user ' + count++);

			if (item === key) {

				isValid = true

			}

			if (key === 'CurrentUserKey') {

				const val = await AsyncStorage.getItem(key);

			}

		}
		return isValid;
	} catch (error) {
		console.log("WelcomeScreen line 56" + error);
	}

}

const WelcomeAppScreen = (props) => {

	useEffect(() => {
		isLoggedOn(props)
	}, []

	)
	return <View style={styles.background}>
		<View style={styles.circleShape} />
		<Text style={styles.welcomeText}>Welcome!</Text>
		<View>
			<TouchableOpacity onPress={function () { props.navigation.navigate("Login") }}>
				<Text style={styles.loginButton}>Login</Text>
			</TouchableOpacity>
		</View>
		<View>
			<TouchableOpacity onPress={function () { props.navigation.navigate("Signup") }}>
				<Text style={styles.signUpButton}>Don't have an account? Sign Up</Text>
			</TouchableOpacity>
		</View>
	</View>
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: "orange",
		height: 800,
		alignItems: "stretch"
	},
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
		alignSelf: "center"
	},
	signUpButton: {
		fontSize: 20,
		marginVertical: 145,
		borderWidth: 2,
		borderColor: "purple",
		padding: 10,
		borderRadius: 9
	},
	welcomeText: {
		fontSize: 45,
		fontStyle: "italic",
		margin: 50,
		marginLeft: 100,
	},
	circleShape: {
		width: 200,
		height: 200,
		borderRadius: 200 / 2,
		backgroundColor: "blue",
		marginLeft: 100,
		marginTop: 150,
		borderWidth: 5,
		borderColor: "skyblue"
	}
});

export default WelcomeAppScreen;