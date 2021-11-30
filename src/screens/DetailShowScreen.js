import React,{useState,useEffect,useContext} from "react";
import {Text,StyleSheet,View,Image,FlatList} from "react-native";
import GameSpot from "../api/GameSpot";
import ResultsShowScreen from "../components/ResultsShowScreen";
import {Context} from "../context/GameContext";


const DetailShowScreen = (props) => {
//console.log("Inside of game screen");
	//console.log(props);
	const [result,setResult] = useState(null);
	const id = props.navigation.getParam("id");
	const name = props.navigation.getParam("name");
	const date = props.navigation.getParam("date");
	const description = props.navigation.getParam("description");
	const genre = props.navigation.getParam("genre");
	const images = props.navigation.getParam("images");

	console.log(result);
	const getImages = async (images) => {
		const response = await GameSpot.get('/${images}',{
			params:{
				api_key: '09939eb54cdc38b5856d035d761e671c3b12cb17',
                format: 'json',
			}
		});
		setResult(response.data);
	} 

	useEffect( () => {getImages(images)}, [] );
	return <View>
		<Text>{images}</Text>
		<Text style = {styles.name}>{name}</Text>
		<Text style = {styles.date}>{date}</Text>
		<Text style = {styles.description}>{description}</Text>
		<FlatList
			data = {genre}
			keyExtractor = { (genre) => {return genre.name} }
			renderItem = { ({item}) => {return <Text>{item.name} |</Text>} }
		/>
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
});

export default DetailShowScreen;

