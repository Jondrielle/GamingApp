import React from "react";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';

const ProfileScreen = () => {
    return <View style={{alignItems: "center"}}>
        <View style = {styles.profileImage}></View>
        <TouchableOpacity onPress = { () => {} }>
            <Text style = {styles.addPhoto}>Add Photo</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    background:{
        alignItems:"center"
    },
    profileImage: {
        height:150,
        width:150,
        borderRadius:100,
        backgroundColor:"gray",
        marginVertical: 170,
    },
    addPhoto: {
           alignSelf:"center",
           marginVertical:-200,
           fontSize: 15,
           textShadowOffset: {width:2,height:2},
           textShadowColor: "green",
           textShadowRadius: 5
    }

});

export default ProfileScreen;