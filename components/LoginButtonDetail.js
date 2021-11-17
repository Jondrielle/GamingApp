import React from 'react';
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


        <View style={styles.innerView}>

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
        borderWidth: 5,
        borderRadius: 15,
        width: 300,
        alignSelf: "center",
        justifyContent:'center',
        height: 50,
        marginTop: 5,

    },
    
    text: {
        fontSize: 25,
        fontStyle: "italic",
        alignSelf: "center",

    },


}


);


export default LoginButtonDetail;