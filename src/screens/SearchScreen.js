import React, {useState,useEffect,useContext} from "react";
import {Text, View, StyleSheet,Image} from 'react-native';
import SearchBar from "../components/SearchBar";
import GameSpot from "../api/GameSpot";
import useResults from "../hooks/useResults";
import GameList from "../components/GameList";
import {Context} from "../context/GameContext";
import DetailShowScreen from "../screens/DetailShowScreen";

const SearchScreen = () => {

const {state,addGame} = useContext(Context);
const [searchTerm,setSearchTerm] = useState("");
const [results,errorMessage,searchApi] = useResults();

//console.log(results);

const filterByGameName = (name) => {
    let myFilteredArray = results.filter( (result) => {
        return result.name === name;
    })

    return myFilteredArray;
}

    return <View style={{alignItems: "center"}}>
        <Text style={{marginTop:60}}></Text>
        <SearchBar 
            searchTerm = {searchTerm} 
            onTermChange = { (newTerm) => setSearchTerm(newTerm) }
            onSearchTermSubmit = { () => {  searchApi(searchTerm) } }
        />
        <Text>Results Found: {results.length}</Text>
        <GameList results = {results}/>
        {errorMessage ? <Text>{errorMessage}</Text>: null}
    </View>
}

const styles = StyleSheet.create({
});

export default SearchScreen;


//const filterByGameName = (name) => {
  //  let myFilteredArray = results.filter( (result) => {
    //    return result.name === name;
    //})

    //return myFilteredArray;
//}