import React from "react";
import {Text,TouchableOpacity,StyleSheet,View} from "react-native";

const Button = (props) => {
	return <View style = {styles.buttonStyle}>
			<Text style = {styles.buttonText}>{props.title}</Text>
	</View>
}

const styles = StyleSheet.create({
	buttonStyle:{
		backgroundColor: "#365544",
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center",
		height: 60,
		borderRadius: 50,
		marginHorizontal: 10,
		elevation: 15,
		shadowColor: "black",
	},
	buttonText: {
		fontWeight: "bold",
		fontSize: 25, 
		color: "white"
	}
});

export default Button;