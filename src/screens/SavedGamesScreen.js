import React,{useContext} from "react";
import { Text, View, StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import {Context} from "../context/GameContext"

navigationOptions = { title: "Home"};


const onLongPressButton = () => {
console.log("Game removed");
    deleteGame(item.id);
}

//a component which renders when the list is empty
const listEmpty = () => {
    return <View style={styles.emptyListStyle}>
        <Text style={{alignSelf: "center", color: "grey",fontSize: 20, marginTop:250}}>Your list is empty</Text>
        <Text style={{fontSize: 20,color: "grey", alignSelf: "center"}}>Games you've added will appear here</Text>
    </View>
}

const SavedGamesScreen = () => {
const {state,deleteGame} = useContext(Context);

    return <View style={styles.mainView}>
        <Text style={styles.screenTitle}>Saved Games</Text>
        <View style={styles.flatListView}>
            <FlatList
                data = {state}
                keyExtractor = { (game) => {return game.id} }
                ListEmptyComponent = {listEmpty()}
                renderItem = { ({item}) => { 
                    return <View>
                        <TouchableOpacity>
                            <Text>{item.name}</Text>
                            <Text>{item.release_date}</Text>
                            <Image style = {styles.gameImage} source = { {uri: item.image} } />
                            <Text style = {styles.gameImage}>{item.image}</Text>
                        </TouchableOpacity>
                    </View>
                }   
            } 
            />
        </View>
        
    </View>    
}

const styles = StyleSheet.create({
    emptyListStyle: {
        //borderWidth: 3,
        height: 600
    },
    emptyText: {
        
    },
    mainView: {
        flex: 1,
    },
    flatListView: {
        flex: 1,
        //borderWidth: 3,
    },
    gameImage:{
    },
    screenTitle: {
        fontWeight: "bold",
        fontSize: 30,
        alignSelf: "center",
        marginTop: 100,

    }
})

export default SavedGamesScreen;
