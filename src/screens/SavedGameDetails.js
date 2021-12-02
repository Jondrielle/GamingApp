import React,{useState,useEffect,useContext} from "react";
import {Text,StyleSheet,View,Image,FlatList,TouchableOpacity} from "react-native";
import TabNavigationRoutes from "../components/TabNavigationRoutes";
import GameSpot from "../api/GameSpot";
import ResultsShowScreen from "../components/ResultsShowScreen";
import {Context} from "../context/GameContext";
import {EvilIcons} from "@expo/vector-icons";


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

	useEffect( () => {getImages(images)}, [] );
	return <View>
		<Text style = {styles.name}>{name}</Text>
		<View>
			<FlatList
				data = {genre}
				keyExtractor = { (genre) => {return genre.name} }
				renderItem = { ({item}) => {return <Text style = {styles.genreList}>{item.name}</Text>} }
			/>
		</View>
		<Text style = {styles.date}>{date}</Text>
		<Text style = {styles.description}>{description}</Text>
		<TouchableOpacity onPress = { () => {addGame(id,image,name,date); props.navigation.navigate("SavedGames")} }>
			<EvilIcons style = {styles.saveIcon} name = "heart"/>
		</TouchableOpacity>
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
		fontWeight:"bold"
	},
	name:{
		fontSize:40,
		fontStyle:"italic",
		alignSelf:"center",
		marginBottom:10
	},
	description:{
		fontSize:17,
		marginTop:10
	},
	saveIcon:{
		fontSize:35,
	}
});

export default DetailShowScreen;