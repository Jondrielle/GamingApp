import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Video } from "expo-av";

const removeKey = async function (key) {
	try {
		await AsyncStorage.removeItem(key);
		return true;
	}
	catch (exception) {
		return false;
	}
}


const UserScreen = (props) => {
	const [password, setPassWord] = useState('');
	const [verifyPassword, setVerifyPassWord] = useState('');
	const [code, setCode] = useState('')
	let user = {
		email: '',
		password: '',
		username: ''
	}

	let newcode = props.navigation.getParam('code');
	let newemail = props.navigation.getParam('email')
	let newusername = props.navigation.getParam('username')
	let newpassword = props.navigation.getParam('password')

	user = {
		email: newemail,
		password: newpassword,
		username: newusername,
		code: newcode
	}

	return <View style={styles.background} >
		<View style={styles.circleShape}>
			<Video
				style={styles.icon}
				source={require('../../assets/logo/GameNet2.mp4')}
				isLooping={true}
				//useNativeControls
				resizeMode="contain"
				shouldPlay
			/>
		</View>
		<View />
		<Text style={styles.welcomeText}>Welcome!</Text>
		<View>
			<TouchableOpacity onPress={async function () {
				removeKey('LoggedOn')
				removeKey('CurrentUserKey')
				removeKey('CurrentUser')
				props.navigation.navigate("Login")
			}}>
				<Text style={styles.logoutButton}>Logout</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={ function () {props.navigation.navigate("Tab")}}>
				<Text style={styles.logoutButton}>Go Back</Text>
			</TouchableOpacity>
		</View>
	</View>
}

const styles = StyleSheet.create({
	background: {
		backgroundColor:"#b7eecf",
		height: 800,
		alignItems: "stretch"
	},
	logoutButton: {
		marginHorizontal: 70,
        fontSize: 25,
        fontStyle: "italic",
        borderWidth: 5,
        borderRadius: 15,
        width: 250,
		paddingLeft:90,
		paddingTop:2,
        justifyContent:'center',
        height: 50,
        marginTop: 5,
        backgroundColor:'yellow',
		alignItems:'center',
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
		color:'black'
	},
	
	circleShape: {
		width: 200,
		height: 200,
		borderRadius: 200 / 2,
		backgroundColor: "blue",
		marginLeft: 100,
		justifyContent: 'center',
		marginTop: 150,
		borderWidth: 5,
		borderColor: "black"
	},
	icon: {
		width: 190,
		height: 190,
		borderRadius: 190 / 2,
		alignSelf: 'center'

	}
});

export default UserScreen;