import React, {useState} from "react";
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import GameSpot from "../api/GameSpot";

const SearchScreen = () => {
console.log(results);

const searchApi = async () => {
try{
    const response = await GameSpot.get('/games/?api_key=[09939eb54cdc38b5856d035d761e671c3b12cb17]',{
        params: {
            name: searchTerm
        }
    });
    setResults(response.data.Fields);
   }catch(e){
     console.log(e);
   }
}
const [searchTerm,setSearchTerm] = useState("");
const [results,setResults] = useState([]);

    return <View style={{alignItems: "center"}}>
        <Text style={{marginTop:60}}></Text>
        <SearchBar 
            searchTerm = {searchTerm} 
            onTermChange = { (newTerm) => setSearchTerm(newTerm) }
            onSearchTermSubmit = { () => {  searchApi(searchTerm) } }
        />
        <Text>Results Found: {results.length}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;