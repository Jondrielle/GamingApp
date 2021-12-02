import React, {useState, useEffect} from "react";
import { 
    View,
    StyleSheet,
    Image
 } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContext } from "react-navigation";
import {Video} from "expo-av"


const SplashScreen = (props) => {
    const [animating, setAnimating] = useState(true);
    console.log(props.navigation)

    //the function will only excecute when the component is first rendered 
    useEffect(() => {
        setTimeout(() => {
            setAnimating(false);
            //Check if the user_id is set or not
            //if not, them the user needs to sign in
            //otherwise, send them to the SavedGamesScreen
            AsyncStorage.getItem('user_id').then((value) =>
                props.navigation.navigate(
                value === null ? 'Auth' : 'TabNavigationRoutes'
                )
            ).catch(function(error) {
                console.log(error);
            });
        }, 5000)
    }, []);

    return (
        <View style={styles.screenView}>
            <Video
            style={styles.circleicon}
            source={require('../../assets/logo/GameNet2.mp4')}
            isLooping ={true}
            //useNativeControls
            resizeMode="contain"
            shouldPlay
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screenView: {
        alignItems: 'center',
        backgroundColor: "#b7eecf",//#1b746e
        flex: 1,
        justifyContent: "center"
    },
    circleicon: {
		width: 250,
		height: 250,
		borderRadius: 90,
		alignSelf: 'center',
        justifyContent:'center', 
	},
});

export default SplashScreen;