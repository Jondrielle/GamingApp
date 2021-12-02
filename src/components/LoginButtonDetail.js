import React,{useState} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
    Pressable
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from "react-native-vector-icons"


const LoginButtonDetail = (props) => {


    return (


        <View style={(props.colorChange)? styles.innerView:styles.innerView2 }>

            <TouchableOpacity
                onPress={props.handler}>

                <Text style={styles.text}> {props.title}</Text>
            </TouchableOpacity>
          
        </View>


    )

}

const styles = StyleSheet.create({

    
    input: {
        height: 40,
        borderColor: 'black',
        marginLeft: 7,
        marginTop: 5,
        fontSize: 20

    },
   
    innerView: {

        marginHorizontal: 70,
        fontSize: 25,
        fontStyle: "italic",
        borderWidth: 3,
        borderRadius: 15,
        width: 300,
        alignSelf: "center",
        justifyContent:'center',
        height: 50,
        marginTop: 5,
        backgroundColor: 'lightgrey',
        elevation: 5,
        shadowColor: "black",
        shadowRadius: 2,
        shadowOpacity: 1,

    },
    innerView2: {

        marginHorizontal: 70,
        fontSize: 25,
        fontStyle: "italic",
        borderWidth: 2,
        borderRadius: 15,
        width: 300,
        alignSelf: "center",
        justifyContent:'center',
        height: 50,
        marginTop: 5,
        backgroundColor:'#4169e1',
        elevation: 15,
        shadowColor: "black",
        shadowRadius: 2,
        shadowOpacity: 1,

    },
    
    text: {
        fontSize: 25,
        fontStyle: "italic",
        alignSelf: "center",

    },


}


);


export default LoginButtonDetail;