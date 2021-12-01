import React from "react";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SettingsScreen = () => {
    return <View style={{alignItems: "center",marginTop:400}}>
        <TouchableOpacity>
            <Text>Your Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Tutorial</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>LogOut</Text>
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