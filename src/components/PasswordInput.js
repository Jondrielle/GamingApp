import React,{useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import { Fontisto,Entypo} from '@expo/vector-icons';

const PasswordInput = (props) => {

const visibleIcon = "eye";
const nonVisibleIcon = "eye-with-line";
const isVisible = "true";

var setPasswordVisibility;
if(visiblePassword === "eye"){
    setPasswordVisibility = false;
} 
else{
    setPasswordVisibility = true;
}

const [visiblePassword, setVisiblePassword] = useState("eye");

    return <View style = {styles.viewStyle} >
            <Fontisto name = "locked" style = {styles.iconStyle}/>
            <TextInput 
                placeholder= "Password"
                value = {props.userPassword}
                style = {styles.input}
                secureTextEntry = {true}
                onChangeText={ (newTerm) => props.onTermChange(newTerm)}
                autoCorrect={false}
                autoCapitalize= 'none'
            />
            <TouchableOpacity onPress = { () => { 
                visiblePassword === "eye" ? setVisiblePassword(nonVisibleIcon) : setVisiblePassword(visibleIcon) } }>
                <Entypo name = {visiblePassword} style = {styles.passwordIconStyle}/>
            </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 50,
        height: 60,
        elevation: 15,
        shadowColor: "black",
    },
    input: {

        flex: 1
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: "center",
        marginHorizontal: 10
    },
    passwordIconStyle: {
        fontSize:35,
        alignSelf: "center",
        marginVertical: 12,
        marginHorizontal: 10
    }
})

export default PasswordInput;