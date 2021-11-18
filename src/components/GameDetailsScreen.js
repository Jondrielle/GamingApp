import React from "react";
import {Text,StyleSheet,Image,View,TouchableOpacity} from "react-native";

const GameDetailsScreen = (props) => {
	return <View>
		<TouchableOpacity onPress = { () =>{} } >
			<Image style = {styles.imagePic} source = { { uri: props.result.image.original} }/>
		</TouchableOpacity>
		<Text style = {styles.title}>{props.result.name}</Text>
		<Text style = {styles.releaseDate}>{props.result.release_date}</Text>
	</View>
}

const styles = StyleSheet.create({
	imagePic:{
		borderRadius:25,
        marginTop:20,
        height:400,
        shadowColor: "darkgray",
        shadowOffset:{width:120,height:120},
        shadowOpacity:300,
		width:300,
		marginHorizontal:45
	},
	title:{
		fontSize:20,
        fontWeight:"bold",
        alignSelf:"flex-start",
        marginTop:30,
        marginLeft:45
	},
	releaseDate:{
		alignSelf:"flex-start",
        marginTop:15,
        marginLeft:45,
        fontSize:20
	},
	genre:{
		alignSelf:"flex-start",
        marginTop:15,
        marginLeft:45,
        fontSize:20
	}
});
export default GameDetailsScreen;