import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { Video } from "expo-av";

const isLoggedOn = async function (props) {

	if (isValidCode('LoggedOn')) {
		try {

			const userKey = await AsyncStorage.getItem('CurrentUserKey')
			const user = await AsyncStorage.getItem('CurrentUser')
			console.log(userKey, typeof await AsyncStorage.getItem('CurrentUserKey'));

			if (user !== null || user !== undefined) {
				const userObject = JSON.parse(user);

				if (userObject === null||userKey===false) {
                   props.navigation.navigate('Welcome')
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

const IndexScreen = (props) => {

	useEffect(() => {
		isLoggedOn(props)
	}, []

	)
    isLoggedOn
	return <View style={styles.background}>
		<View style={styles.circleShape}>


			<Video

				style={styles.icon}
				source={require('../../assets/logo/GameNet2.mp4')}
				isLooping ={true}
				//useNativeControls
				resizeMode="contain"
				shouldPlay


			/>




		</View>

				





	</View>
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: "#1B322D",
		height: 800,
		alignItems: "stretch"
	},
	
	circleShape: {
		width: 345,
		height: 345,
		borderRadius: 345 / 2,
		//backgroundColor: "#AAB5AF",
		//marginLeft: 50,
        alignSelf:'center',
		justifyContent: 'center',
		marginTop: 150,
		borderWidth: 5,
		borderColor: 'blue',
	},
	icon: {
		width: 340,
		height: 340,
		borderRadius: 340 / 2,
		alignSelf: 'center',
 
	}
});

export default IndexScreen;