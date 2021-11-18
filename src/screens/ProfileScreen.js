import React,{useState} from "react";
import {Text, View, StyleSheet,TouchableOpacity,ScrollView,TextInput} from 'react-native';
import RoundButton from "../components/RoundButton";
import EditProfileScreen from "./EditProfileScreen";
import {FontAwesome5,MaterialIcons} from "@expo/vector-icons";

const ProfileScreen = ({navigation}) => {
    //const [optionChoice, setOptionChoice] = useState([]);
    return <View>
        <ScrollView>
            <View style = {{padding:10, width:'100%',backgroundColor:"green",height:200}}></View>
                <View style = {styles.profileImage}>
                <TouchableOpacity onPress = { () => {navigation.navigate("EditScreen")} }>
                    <FontAwesome5 name = "edit" style = {styles.iconStyle}/>
                </TouchableOpacity>
                </View>
            <Text style = {styles.userName}>Regis</Text>
            <TouchableOpacity>
                <View>
                    <RoundButton marginTop = {300} buttonColor = "darkgreen" title = "Logout"
                    iconName = {<MaterialIcons style = {styles.iconStyle} name = "logout"/>}/>
                </View>
            </TouchableOpacity>
        </ScrollView>
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
        marginTop:-80,
        alignSelf:"center"
    },
    addPhoto: {
           alignSelf:"center",
           marginVertical:-200,
           fontSize: 15,
           textShadowOffset: {width:2,height:2},
           textShadowColor: "green",
           textShadowRadius: 5,
    },
    userName:{
        fontSize:25,
        fontWeight:"bold",
        alignSelf:"center",
        padding:10
    },
    iconStyle:{
        fontSize:25,
        padding:20,
        position:"absolute",
        alignSelf:"flex-end"
    }

});

export default ProfileScreen;