import React from "react";
import {Text,StyleSheet,Image,View} from "react-native";
import GameList from "./GameList";

const GameDetailsScreen = (props) => {
console.log("Inside of Game Detail");
console.log(props);
	return <View>
		<Image style = {styles.imagePic} source = { { uri: props.result.image.original} }/>
		<Text style = {styles.title}>{props.result.name}</Text>
		<Text style = {styles.releaseDate}>{props.result.release_date}</Text>
		<Text></Text>
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