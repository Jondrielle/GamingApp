import React from "react";
import {Text,StyleSheet,View} from "react-native";

const UserTextInput = (props) => {
    return <View>
        <Text style = {styles.boxInputStyle}></Text>
    </View>
}

const styles = StyleSheet.create({
    boxInputStyle:{
	    flexDirection: "row",
        borderColor: "black",
        backgroundColor: "white",
        borderRadius: 50,
        height: 60,
        elevation: 15,
        shadowColor: "black",
    }
});

export default UserTextInput;