import React,{useContext} from "react";
import {Text,StyleSheet,Image,View,TouchableOpacity} from "react-native";
import DetailShowScreen from "../screens/DetailShowScreen";
import {withNavigation} from "react-navigation";
import {EvilIcons} from "@expo/vector-icons";
import {Context} from "../context/GameContext";

const ResultsShowScreen = (props) => {

	//const id = props.navigation.getParam("id");
	//console.log(props);
	const {addGame} = useContext(Context);
	return <View>
		<TouchableOpacity onPress = { () => { props.navigation.navigate("Detail",{id: props.result.images_api_url,name: props.result.name,
		date: props.result.release_date, description: props.result.description, genre: props.result.genres}) } } >
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
		marginHorizontal:45,
	},
	title:{
		fontSize:20,
        fontWeight:"bold",
        alignSelf:"flex-start",
        marginTop:30,
        marginLeft:45
	},
	saveIcon:{
		fontSize:50,
		borderWidth:2,
		top:75,
		alignSelf:"flex-end",
		right:50
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
export default withNavigation(ResultsShowScreen);