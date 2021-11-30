import React from "react";
import {View,StyleSheet,Text,TouchableOpacity} from "react-native"

const TutorialDetail = function(props){

    return<View>
                <TouchableOpacity onPress={props.screen}>
            <Text style > {props.question}</Text>
           
                </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
   
});

export default TutorialDetail;