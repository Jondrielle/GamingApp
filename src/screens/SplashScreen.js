import React, {useState, useEffect} from "react";
import { 
    ActivityIndicator,
    View,
    StyleSheet,
    Image
 } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContext } from "react-navigation";

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
            <Image
                source={require('../../assets/GameNet.png')}
                style={styles.image}
            />
            <ActivityIndicator 
                animating={animating}
                size="large"
                style={{alignItems: "center", height: 80}}
                color="gray"
                style={{opacity: 1}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 350,
        width: 350
    },
    screenView: {
        alignItems: 'center',
        backgroundColor: "#0c3429",
        flex: 1,
        justifyContent: "center"
    }
});

export default SplashScreen;