import React,{useState,useEffect,useContext} from "react";
import {Text,StyleSheet,View,Image,FlatList,TouchableOpacity, ScrollView} from "react-native";
import TabNavigationRoutes from "../components/TabNavigationRoutes";
import GameSpot from "../api/GameSpot";
import ResultsShowScreen from "../components/ResultsShowScreen";
import {Context} from "../context/GameContext";
import {EvilIcons, Entypo} from "@expo/vector-icons";
import { startDetecting } from "react-native/Libraries/Utilities/PixelRatio";


const DetailShowScreen = (props) => {
//console.log("Inside of game screen");
	//console.log(props);
	const [result,setResult] = useState(null);
	const id = props.navigation.getParam("id");
	const name = props.navigation.getParam("name");
	const image = props.navigation.getParam("image");
	const date = props.navigation.getParam("date");
	const description = props.navigation.getParam("description");
	const genre = props.navigation.getParam("genre");
	const images = props.navigation.getParam("images");
	const {state,addGame} = useContext(Context);
	//console.log(result);
	const getImages = async (images) => {
		const response = await GameSpot.get('/images',{
			params:{
				api_key: '09939eb54cdc38b5856d035d761e671c3b12cb17',
                format: 'json',
				filter: "association: " + {images}
			}
		});
		setResult(response.data);
	} 

	const releaseDate = (date) => {
		let fullDate = {}
		fullDate.year = date.slice(0,4)

		let day = date.slice(8,10)
		let dayInt = parseInt(day)
		switch(dayInt) {
			case (1):
				fullDate.day = dayInt.toString() + "st"
			  break;
			case (21):
				fullDate.day = dayInt.toString() + "st"
			  break;
			case (31):
				fullDate.day = dayInt.toString() + "st"
			  break;
			case (2):
				fullDate.day = dayInt.toString() + "nd"
			  break;
			case (22):
				fullDate.day = dayInt.toString() + "nd"
			  break;
			case (3):
				fullDate.day = dayInt.toString() + "rd"
			  break;
			case (23):
				fullDate.day = dayInt.toString() + "rd"
			  break;
			default:
				fullDate.day = dayInt.toString() + "th"
		  }
		
		let releaseMonth = parseInt(date.slice(6,8))
		let allMonths = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September",
					  	 "October", "November", "December"]

		fullDate.month = allMonths[releaseMonth]
		
		return fullDate
	}

	const isThisGameSaved = (state, id) => {
		let found = false
		state.forEach((game) => {
			if(game.id === id){
				found = true
			}
		})
		return found
	}

	useEffect( () => {getImages(images)}, [] );
	return <ScrollView style={{paddingLeft: 10}}>
		<Text style = {styles.name}>{name}</Text>
		<View style={{flexDirection: "row"}}>
			<Text style={{fontSize:20, fontWeight: "bold", paddingTop: 3}}>Genre: </Text>
			<FlatList
				data = {genre}
				horizontal= {true}
				keyExtractor = { (genre) => {return genre.name} }
				renderItem = { ({item}) => {return <Text style = {styles.genreList}>{item.name} | </Text>} }
			/>
		</View>
		<Text style = {styles.date}>Release Date: {releaseDate(date).month} {releaseDate(date).day}, {releaseDate(date).year}</Text>
		<Text style = {styles.description}>{description}</Text>

		{isThisGameSaved(state, id)
		? <View style={{flexDirection: "row",}}>
			<Entypo style = {styles.saveIcon} name = "heart" color= "#2f4f4f"/>
			<Text style={{alignSelf: "center", fontWeight: "bold"}}> Saved to your games list!</Text>
		  </View>
		: <View>
			<TouchableOpacity onPress = { () => {addGame(id,image,name,date); props.navigation.navigate("SavedGames")} }>
				<Entypo style = {styles.saveIcon} name = "heart-outlined" color= "black"/>
			</TouchableOpacity>
		  </View>
		//
		}
	</ScrollView>
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
	date:{
		alignSelf:"flex-start",
        marginTop:15,
        fontSize:20,
		marginTop:15,
		fontWeight:"bold"
	},
	genreList:{
		flexDirection:"column",
		fontSize:20,
		marginTop:3,
		marginBottom:5,
		fontWeight:"bold",
	},
	name:{
		fontSize:40,
		fontStyle:"italic",
		alignSelf:"center",
		marginBottom:10,

	},
	description:{
		fontSize:17,
		marginTop:10
	},
	saveIcon:{
		fontSize:100,
	}
});

export default DetailShowScreen;

