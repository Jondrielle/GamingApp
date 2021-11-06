import React, {useState} from "react";
import {Text, View, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
const [searchTerm,setSearchTerm] = useState();

    return <View style={{alignItems: "center"}}>
        <Text style={{marginTop:60}}></Text>
        <SearchBar searchTerm = {searchTerm} onTermChange = { (newTerm) => setSearchTerm(newTerm) }/>
    </View>
}

const styles = StyleSheet.create({});

export default SearchScreen;