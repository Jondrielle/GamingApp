import React from 'react';
import {Text, TextInput, TouchableOpacity, View ,StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';


const UserNameInput = (props) => {
    return <View style = {styles.viewStyle} >
            <Ionicons name = "person" style = {styles.iconStyle}/>
            <TextInput 
                placeholder= "Username"
                value = {props.theUserName}
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
        borderColor: "black",
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

export default UserNameInput;