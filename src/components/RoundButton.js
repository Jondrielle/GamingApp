import React from "react";
import {Text,TouchableOpacity,StyleSheet,View} from "react-native";

const Button = (props) => {

	const inLineStyleSheet = {
		marginTop : props.marginTop,
		borderRadius : props.marginTop,
		backgroundColor: props.buttonColor
	}

	//return <View style = {[styles.buttonStyle, inLineStyleSheet]}> 

	//return <View style = {[styles.buttonStyle,{marginTop:props.format}]}> 
	return <View style = {[styles.buttonStyle, inLineStyleSheet]}> 
		<Text style = {styles.buttonText}>{props.iconName}{props.title}</Text>
	</View>
}

const styles = StyleSheet.create({
	buttonStyle:{
		alignItems: "center",
		justifyContent: "center",
		height: 60,
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