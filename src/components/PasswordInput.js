import React from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import { Fontisto} from '@expo/vector-icons';


const PasswordInput = (props) => {
    return <View style = {styles.viewStyle} >
            <Fontisto name = "locked" style = {styles.iconStyle}/>
            <TextInput 
                placeholder= "Password"
                value = {props.userPassword}
                style = {styles.input}
                onChangeText={ (newTerm) => props.onTermChange(newTerm)}
                autoCorrect={false}
                autoCapitalize= 'none'

            />
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
    }
})

export default PasswordInput;