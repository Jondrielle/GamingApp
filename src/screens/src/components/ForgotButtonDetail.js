import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ForgotButtonDetail = (props) => {

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
        marginLeft: 7,
        marginTop: 5,
        fontSize: 20

    },
   
    innerView: {

        marginHorizontal: 70,
        fontSize: 25,
        fontStyle: "italic",
        borderWidth: 1,
        borderRadius: 15,
        width: 300,
        alignSelf: "center",
        justifyContent:'center',
        height: 50,
        marginTop: 5,
        backgroundColor:'yellow'

    },
    
    text: {
        fontSize: 25,
        fontStyle: "italic",
        alignSelf: "center",

    },


}


);


export default ForgotButtonDetail;