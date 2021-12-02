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
	console.log(props.result.image.original);
	//console.log("Inside of Results Show Screen");
	//console.log(props);
	
	return <View>
		<TouchableOpacity onPress = { () => { 
			props.navigation.navigate("Detail",{id: props.result.id, image:props.result.image.original, images: props.result.images_api_url,name: props.result.name,
				date: props.result.release_date, description: props.result.description, genre: props.result.genres})
		 } } >
			<Image style = {styles.imagePic} source = { { uri: props.result.image.original} }/>
		</TouchableOpacity>
		<Text style = {styles.title}>{props.result.name}</Text>
		
	</View>
}
//release date: not needeed for the search screen
//<Text style = {styles.releaseDate}>{props.result.release_date}</Text> 
const styles = StyleSheet.create({
	imagePic:{
		borderRadius:25,
        marginTop:10,
		width:180,
        height:180,
		marginHorizontal: 5,
		shadowColor: "black",
        shadowOffset:{width:180,height:180},
        shadowOpacity: 300,
		shadowRadius: 25,
	},
	title:{
		fontSize:20,
        fontWeight:"bold",
        alignSelf:"flex-start",
        //marginTop:30,
        marginLeft:5
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