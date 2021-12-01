import React,{useContext} from "react";
import { Text, View, StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import {Context} from "../context/GameContext"

navigationOptions = { title: "Home"};


const onLongPressButton = () => {
console.log("Game removed");
    deleteGame(item.id);
}

const SavedGamesScreen = () => {
const {state,deleteGame} = useContext(Context);

    return <View style={{alignItems: "center"}}>
         <Text style={{marginTop: 400}}>Saved games go here.</Text>
         <FlatList
            data = {state}
            keyExtractor = { (game) => {return game.id} }
            renderItem = { ({item}) => { 
            return <View>
                <TouchableOpacity>
                    <Text>{item.name}</Text>
                    <Text>{item.release_date}</Text>
                    <Image style = {styles.gameImage} source = { {uri: item.image} } />
                    <Text style = {styles.gameImage}>{item.image}</Text>
                </TouchableOpacity>
            </View>
            } } 
         />
    </View>    
}

const styles = StyleSheet.create({
    gameImage:{
    }
})

export default SavedGamesScreen;
