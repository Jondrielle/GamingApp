import React,{useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import { Fontisto,Entypo} from '@expo/vector-icons';

const PasswordInput = (props) => {

const visibleIcon = "eye";
const nonVisibleIcon = "eye-with-line";

const [iconVisible, setIconVisible] = useState("eye");
const [isVisible,setIsVisible] = useState("true")


const hideShowPassword = () => {
    if(iconVisible === "eye"){
        setIconVisible(nonVisibleIcon);
        setIsVisible(false);
    } 
    else{
        setIconVisible(visibleIcon);
        setIsVisible(true);
    }
}

    return <View style = {styles.viewStyle} >
            <Fontisto name = "locked" style = {styles.iconStyle}/>
            <TextInput 
                placeholder= "Password"
                value = {props.userPassword}
                style = {styles.input}
                secureTextEntry = {isVisible}
                onChangeText={ (newTerm) => props.onTermChange(newTerm)}
                autoCorrect={false}
                autoCapitalize= 'none'
            />
            <TouchableOpacity onPress = { () => {hideShowPassword ()} }>
                <Entypo name = {iconVisible} style = {styles.passwordIconStyle}/>
            </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 50,
        height: 50,
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
        fontSize:30,
        alignSelf: "center",
        marginVertical: 10,
        marginHorizontal: 10
    }
})

export default PasswordInput;