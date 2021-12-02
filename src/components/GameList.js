import React from "react";
import {Text,StyleSheet,View,Image,FlatList,TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
import DetailShowScreen from "../screens/DetailShowScreen";
import ResultsShowScreen from "./ResultsShowScreen";

const GameList = (props) => {

	return <View>
			<FlatList
			horizontal = {true}
			keyExtractor = { (result) => {return result.id}}
			data = {props.results}
			renderItem = { ({item}) => {
			return <View>
				<TouchableOpacity onPress = { () => {props.navigation.navigate("Results", {id:item.id} )} }>
					<ResultsShowScreen result = {item}/>
				</TouchableOpacity>
				</View> } }
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
		marginHorizontal:45,
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

export default withNavigation(GameList);