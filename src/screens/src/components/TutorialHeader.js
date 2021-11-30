import React from "react";
import { View, StyleSheet, Text, FlatList, TextInput, SectionList, Alert, ScrollView, Button } from "react-native"
//import TutorialDetail from "../components/TutorialDetail";


const TutorialHeader = function (props) {


    return <View >
        <Text style={styles.header}> {props.text}</Text>            
             
            </View>
  }

const styles = StyleSheet.create({
    
    header:{
      backgroundColor : '#64B5F6',
      fontSize : 20,
      padding: 5,
      color: '#fff',
      fontWeight: 'bold'
   }
});

export default TutorialHeader;


