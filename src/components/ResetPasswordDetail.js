import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
    Pressable
} from 'react-native';

    const ResetPasswordDetail = (props)=> {

    return (
        <View style={styles.body} >
            
            <Text style={styles.resetTextStyle}>{props.title}</Text>
          
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={props.passwordHandler}
                autoCapitalize='none'
                secureTextEntry
            />
        
           
        </View>
    )

}

const styles = StyleSheet.create({

    body:{
        backgroundColor:'orange',
        flexDirection:'row'
    },
    input:{
        borderWidth:2,
        width:200,
        height:40,        
        borderColor:'black',
        padding:2,
        marginLeft:50,
        marginTop:10
        
    },
    savePassWordStyle:{

        marginTop:20,
        marginRight:50,
        alignSelf:'center',
        borderWidth:2,
        borderColor:'black',
        width:200,
        height:20,

    },

    resetTextStyle:{
        fontSize :18,
        marginTop:2,
        marginLeft:2
        
    }

}


);


export default ResetPasswordDetail;