import React from "react";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import UserScreen from "./UserScreen";
import {Feather} from "react-native-vector-icons"

const SettingsScreen = (props) => {
    return <View style={styles.mainView}>
        <View style={{ marginLeft: 20}}>
            <Text style={styles.settingsStyle}>Settings</Text>
        </View>

        <View style={{flexDirection: "row", marginTop: 30, marginLeft: 20}}>
            <Feather name="user" size={40}/>
            <TouchableOpacity onPress = { () => {props.navigation.navigate("user")} }>
                <Text style={{fontSize: 30}}>  Account</Text>
            </TouchableOpacity>
        </View>

        <View style={{borderWidth: 1, marginHorizontal: 30, marginTop: 30, borderColor: "grey"}}></View>

        <View style={{flexDirection: "row", marginTop: 30, marginLeft: 20}}>
            <Feather name="video" size={40}/>
            <TouchableOpacity  onPress = { () => {props.navigation.navigate("option")} }>
                <Text style={{fontSize: 30}}>  Tutorials</Text>
            </TouchableOpacity>
        </View>
        
        
    </View>
}

const styles = StyleSheet.create({
    iconStyle:{
        fontSize:35,
        //alignSelf: "center",
        marginHorizontal: 10,
    },
    mainView: {
        flex: 1,
        backgroundColor: "#b7eecf"
    },
    settingsStyle: {
        marginTop: 100,
        fontWeight: "bold",
        fontSize: 50,
    }
});
export default SettingsScreen;