import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity, Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const removeKey = async function (key) {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	}
	catch (exception) {
		return false;
	}
}

/**        delete******************************************

const getAsyncUserKey = async (key) => {
	try {


		const data = await AsyncStorage.getItem(key);
		//isValidCode(key)

		return data;
	} catch (error) {
		console.warn(error);
	}
}

const getAsyncStorage =  (item) => {
	try {
		const getAsyncStorageData = AsyncStorage.getItem('CurrentUserKey');
		
		let data = JSON.parse(getAsyncStorageData)
		console.log(typeof data, data, data + 'line 36');
		item = data
	} catch (error) {
		console.log(error);
	}
	return item
}


const clearAllData = async function () {
	AsyncStorage.getAllKeys()
		.then(keys => AsyncStorage.multiRemove(keys))
		.then(() => alert('success'));
};

*/

const UserScreen = (props) => {
	const [password, setPassWord] = useState('');
	const [verifyPassword, setVerifyPassWord] = useState('');
	const [code, setCode] = useState('')
	let user = { email: '',
				 password: '', 
				 username: '' }
	
	let newcode = props.navigation.getParam('code');
	let newemail = props.navigation.getParam('email')
	let newusername = props.navigation.getParam('username')
	let newpassword = props.navigation.getParam('password')

	user = {email:newemail,
			password:newpassword,
			username:newusername,
			code:newcode}

	return <View style={styles.background} >
		<View style={styles.circleShape} />
		<Text style={styles.welcomeText}>Welcome {user.username} !</Text>
		<View>

			<TouchableOpacity onPress={async function () {

				removeKey('LoggedOn')
				removeKey('CurrentUserKey')
				removeKey('CurrentUser')

				props.navigation.navigate("Welcome")
			}}>
				<Text style={styles.loginButton}>Logout</Text>
			</TouchableOpacity>
		</View>

	</View>
}

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

export default UserScreen;