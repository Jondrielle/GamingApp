import React from "react";
import {Text,View,StyleSheet,TouchableOpacity} from "react-native";

const TutorialScreen = () =>{
	return <View style = {styles.panel}>
		<Text style = {styles.textStyle}> Let's Begin the tutorial</Text>
		<TouchableOpacity >
			<Text style = {styles.nextButton}>Next</Text>
		</TouchableOpacity>
		<TouchableOpacity>
			<Text style = {styles.skipButton}>Skip</Text>
		</TouchableOpacity>
	</View>
};

const styles = StyleSheet.create({
	panel:{
		backgroundColor: "lightblue",
		height:700,
		width:370,
	    marginHorizontal:9,
		marginVertical:22,
		borderRadius:15
	},
	textStyle:{
		fontSize: 20
	},
	nextButton:{
		fontSize:30
	},
	skipButton:{
		fontSize:20
	},
	circles:{
		width:50,
		height:50,
		borderRadius:5/2,
		backgroundColor:"blue",
	},
});

export default TutorialScreen;