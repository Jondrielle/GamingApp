import React from 'react';
import { Entypo } from '@expo/vector-icons'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
    Pressable
} from 'react-native';

const IconTextImageDetail = (props) => {

    return (
        <View style={styles.body} >

            <Text style={styles.textStyle}>{props.title}</Text>

            <View style={styles.innerView}>
                <Entypo name={props.image} style={styles.iconstyle} />

                <TextInput
                    style={styles.input}
                    placeholder={props.placeholder}
                    onChangeText={props.handler}
                    autoCapitalize='none'
                    secureTextEntry={props.viewInput}
                />
            </View>

        </View>
    )

}

const styles = StyleSheet.create({

    body: {
        backgroundColor: 'orange',
        borderColor: 'black'

    },
    input: {
        height: 40,
        borderColor: 'black',
        marginLeft: 7,
        marginTop: 5,
        fontSize: 20

    },
    savePassWordStyle: {

        marginTop: 20,
        marginRight: 50,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black',
        width: 200,
        height: 20,

    },

    textStyle: {
        fontSize: 18,
        marginTop: 2,
        marginLeft: 20

    },
    innerView: {

        flexDirection: 'row',
        marginHorizontal: 40,
        fontSize: 25,
        fontStyle: "italic",
        borderColor: "black",
        borderWidth: 5,
        borderRadius: 15,
        width: 300,
        alignSelf: "center",
        height: 50,
        marginTop: 5

    },
    iconstyle: {
        fontSize: 30,
        alignSelf: 'flex-start',
        marginTop: 5
    }

}


);


export default IconTextImageDetail;