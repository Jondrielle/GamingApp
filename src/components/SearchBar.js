import React from "react";
import {Text,StyleSheet,View,TextInput} from "react-native";
import {Entypo} from "@expo/vector-icons";

const SearchBar = (props) => {
	return <View style = {styles.background}>
			<Entypo name = "magnifying-glass" size = {35}/>
			<TextInput style = {styles.input}
				placeholder = "Search"
				value = {props.searchTerm}
				autoCapitalize = "none"
				autoCorrect = {false}
				onChangeText = { (newTerm) => props.onTermChange(newTerm) }
				onEndEditing = { () => {console.log("Entered")} }
				/>
	</View>
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: "lightgray",
		width:350,
		height:35,
		borderRadius:7,
		flexDirection:"row"
	},
	input: {
		fontSize: 20,
		marginHorizontal:10,
		flex: 1
	}
});

export default SearchBar;