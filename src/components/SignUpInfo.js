import React from "react";
import {Text,StyleSheet,TouchableOpacity,View,TextInput} from "react-native";

const SignUpInfo = (props)=>{
	
	return <View >
			<View style={styles.container}>
		<Text style={styles.textStyle}>{props.title}</Text>
		
		<View>
		<TextInput style={styles.input} 
					
					autoCapitalize="none"
					onChangeText={props.textArea}/>
		</View>
	
		</View>
		</View>
}

const styles = StyleSheet.create({

	input:{
		width:200,
		backgroundColor:'blue',
		borderColor:"black",
		height:20,
		borderWidth:1,
		color:'white',
		textDecorationColor:'white',
		alignSelf:'flex-start',
		margin:10,
	},
	container:{
		flexDirection : 'row',
		justifyContent:'flex-start'
	},
	textStyle:{
		fontStyle:'normal',
		fontWeight:'bold',
		marginTop:10,
		alignSelf:'flex-start',
		fontSize:20,
		height:40
	},

	
});

export default SignUpInfo;