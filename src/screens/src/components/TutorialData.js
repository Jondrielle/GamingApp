import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, FlatList, TextInput, SectionList, Alert, ScrollView, Button } from "react-native"
//import TutorialDetail from "../components/TutorialDetail";
import { AntDesign } from "react-native-vector-icons"
import Video from "react-native-video";



const TutorialData = function (props) {


    return <View style={styles.background}>
        <TouchableOpacity style={styles.container}
            onPress=  {props.handler}
                
            >
            <AntDesign name='play' style={styles.iconstyle} />
            <Text style={styles.body}> {props.text}</Text>

        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({

    body: {
        fontSize: 25,
        // padding: 2,
        color: '#000',
        backgroundColor: '#F5F5F5'
    },
    container: {
        flexDirection: 'row',
        padding: 1,
    },
    iconstyle: {
        fontSize: 25,
    },
    background: {
        borderBottomColor: 'black',
        borderWidth: 1

    }
});

export default TutorialData;


