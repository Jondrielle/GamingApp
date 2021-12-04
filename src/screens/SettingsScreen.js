import React from "react";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import UserScreen from "./UserScreen";
import TutorialOptionScreen from "./TutorialOptionScreen";

const SettingsScreen = (props) => {
    return <View style={{alignItems: "center",marginTop:400}}>
        <TouchableOpacity onPress = { () => {props.navigation.navigate("user")} }>
            <Text>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress = { () => {props.navigation.navigate("option")} }>
            <Text>Tutorial</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    iconStyle:{
        fontSize:35,
        //alignSelf: "center",
        marginHorizontal: 10,
        
    }
});
export default SettingsScreen;