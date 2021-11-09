import React from "react";
import {Text,View,StyleSheet} from "react-native";

const textButton = (props) => {
	return <View style = {styles.background}>
		<Text style = {styles.textStyles}>{props.text}</Text>
	</View>
}

const styles = StyleSheet.create({
	textStyles:{
		fontSize:15,
		alignSelf:"flex-end",
		marginVertical:6
	}
});

export default textButton;