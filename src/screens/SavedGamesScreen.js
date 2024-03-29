import React,{useContext} from "react";
import { Text, View, StyleSheet,FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import {Context} from "../context/GameContext";

navigationOptions = { title: "Home"};




//a component which renders when the list is empty
const listEmpty = () => {
    return <View style={styles.emptyListStyle}>
        <Text style={{alignSelf: "center", color: "grey",fontSize: 20, marginTop:250}}>Your list is empty</Text>
        <Text style={{fontSize: 20,color: "grey", alignSelf: "center", marginLeft: 20}}>Games you've added will appear here</Text>
    </View>
}

const SavedGamesScreen = (props) => {
const {state,deleteGame} = useContext(Context);

const handlerLongClick = (id) => {
    //handler for Long Click
    alert('Game Removed');
    //deleteGame(id)
  };

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

        let possibleColors = ['#b7eecf', '#a9c4f5', '#f08080']

    return <View style={styles.mainView}>
        <Text style={styles.screenTitle}>Saved Games</Text>
        <View style={styles.flatListView}>
            <FlatList
                data = {state}
                horizontal= {true}
                keyExtractor = { (game) => {return game.id} }
                ListEmptyComponent = {listEmpty()}
                renderItem = { ({item, index}) => { 
                    //props.navigation.navigate("SavedGamesDetail"), {item}
                    //deleteGame(item.id);console.log("game removed")
                    return <View style={{width: 300, borderColor: "black", backgroundColor: possibleColors[index % possibleColors.length]}}>
                    <TouchableOpacity style={styles.gameImageViewStyle} onPress = { () => {
                    props.navigation.navigate("SavedGameDetail", {id:item.id, name: item.name, date: item.release_date, description: item.description,genre: item.genre, images: item.images });
                    } }>
                            <Image style = {styles.gameImageStyle} source = { {uri: item.image} } />
                        </TouchableOpacity>
                        
                        <Text style={{fontWeight: "bold", fontSize: 20, alignSelf: "center"}}>{item.name}</Text>
                        <Text style = {styles.date}>Release Date: {releaseDate(item.release_date).month} {releaseDate(item.release_date).day}, {releaseDate(item.release_date).year}</Text>
                     
                        <View style={{flexDirection: "row"}}>
                            <Text style={{marginLeft: 10}}>Genre: </Text>
                            <FlatList
                                style={{flexDirection: "row"}}
                                data = {item.genre}
                                horizontal= {true}
                                keyExtractor = { (genre) => {return genre.name} }
                                renderItem = { ({item}) => {return <View><Text style = {styles.genreList}>{item.name} | </Text></View>} }
                            />
                        </View>
                        
                    </View>
                
                }} 
            />
        </View>
        
    </View>    
}



const styles = StyleSheet.create({
    
    emptyListStyle: {
        //borderWidth: 3,
        height: 600
    },
    mainView: {
        flex: 1,
    },
    flatListView: {
        flex: 1,
    },
    gameImageViewStyle:{
        height: "50%",
        marginTop: 100,
        marginHorizontal: 30,
        borderRadius: 50,
    },
    gameImageStyle: {
        height: "100%",
        borderRadius: 50,
    },
    gameView: {
        
    },
    screenTitle: {
        fontWeight: "bold",
        fontSize: 30,
        alignSelf: "center",
        marginTop: 100,
    },
    date: {
        marginLeft: 10
    },
    genreList: {
        
    }
})

export default SavedGamesScreen;
