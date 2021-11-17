import React from "react";
import {Text,StyleSheet,View,Image,FlatList} from "react-native";
import GameDetailsScreen from "./GameDetailsScreen";

const GameList = (props) => {
//console.log("Inside of GameList");
//console.log(props.results);
	return <View>
			<FlatList
			horizontal = {true}
			keyExtractor = { (result) => {return result.id}}
			data = {props.results}
			renderItem = { ({item}) => {return <GameDetailsScreen result = {item}/> } }
			/>
	</View>
}

const styles = StyleSheet.create({});

export default GameList;