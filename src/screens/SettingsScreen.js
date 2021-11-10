import React from "react";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {MaterialIcons, Ionicons} from '@expo/vector-icons';

const SettingsScreen = () => {
    return <View style={{alignItems: "center"}}>
        <Text style={{marginTop: 400}}>Settings Screen</Text>
        <TouchableOpacity onPress = { () => {console.log("Logging Out");}}>
            <MaterialIcons name = "logout" style = {styles.iconStyle}/>
        </TouchableOpacity>
        <TouchableOpacity onPress = { () => {console.log("Notifications");} }>
            <Ionicons name = "notifications" style = {styles.iconStyle}/>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    iconStyle:{
        fontSize:35,
        //alignSelf: "center",
        marginHorizontal: 10
    }
});
export default SettingsScreen;