import React from "react";
import { View, StyleSheet, Text, FlatList, TextInput, SectionList, Alert, ScrollView, Button } from "react-native"
import TutorialHeader from "../components/TutorialHeader";
import TutorialData from "../components/TutorialData";
import { Video } from "expo-av";
import { Ionicons } from "react-native-vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler";


let screenNavigation = {
    screen:''

    }
    let screen = ''
    let screenPrompt = {
        option:'tutorials',
        Welcome: 'WelcomeScreen',
        Tutorial: 'TutorialScreen',
        Login: 'LoginScreen',
        Signup: 'SignUpScreen',
        reset:'Reset Screen',
        user:'UserScreen',
        unique:'UniqueKeyScreen',
        option:'Tutorials',
        player:'VideoPlayerScreen',
        index:'IndexScreen'
    
    }
    
    let route = ''

const TutorialOptionScreen = function (props) {

    route = props.navigation.getParam('screen')
    screenNavigation.screen = route
    screen = screenPrompt[route]

const optionArray = [{screen:route,text:'How to create a new account',video :require('../../assets/tutorialvideos/vidaccount1.mp4')},
                    {screen:route,text:'How to reset your password',video :require('../../assets/tutorialvideos/vidaccount2.mp4')},
                    {screen:route,text:'How to log into your account',video :require('../../assets/tutorialvideos/vidaccount3.mp4')}
]
    return <View style={styles.container}>
        	<View style={styles.circleShape}>


<Video

	style={styles.circleicon}
	source={require('../../assets/logo/GameNet2.mp4')}
	isLooping ={true}
	//useNativeControls
	resizeMode="contain"
	shouldPlay


/>
</View>
<View style = {styles.iconView}>
<TouchableOpacity onPress = {() =>{
    props.navigation.navigate(route)
}}>
<Ionicons name='arrow-back-circle'
          style={{color:'green',marginLeft:300,fontSize:50,}}
          />
</TouchableOpacity>

</View>
        <Text style={styles.header}>Tutorial videos</Text>

        <ScrollView>
            <TutorialHeader text='User Account' />
            <TutorialData text={optionArray[0].text}  handler={()=>{ props.navigation.navigate('player',optionArray[0])}}/>
            <TutorialData text={optionArray[1].text}  handler={()=>{ props.navigation.navigate('player',optionArray[1])}}/>
            <TutorialData text={optionArray[2].text}  handler={()=>{ props.navigation.navigate('player',optionArray[2])}}/>

        
            <TutorialHeader text='????????' />
            <TutorialData text='??????????' handler={()=>{ props.navigation.navigate('player')}}/>
            <TutorialData text='??????????'/>
            <TutorialData text='??????????'/>
            <TutorialData text='??????????'/>
            <TutorialData text='??????????'/>
            <TutorialHeader text='????????' />
            <TutorialData text='??????????'/>
            <TutorialData text='??????????'/>
            <TutorialData text='??????????'/>
            <TutorialData text='??????????'/>
            <TutorialData text='??????????'/>

           
        </ScrollView>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        backgroundColor: "#e5e5e5",
    },
   
    header: {
        fontSize: 45,
        padding: 5,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop:20,
        color:"#1B322D"
    },
    circlebackground: {
		backgroundColor: "#1B322D"
		
	},
		
	circleShape: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		backgroundColor: "blue",
		marginLeft: 10,
		justifyContent: 'center',
		marginTop: 2,
		borderWidth: 5,
		borderColor: "blue",
		bottom:-20,
		right:-10,

	},
	circleicon: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		alignSelf: 'center',
        justifyContent:'center'

	},
	
	signinStyle: {
		alignSelf: 'center',
		fontSize: 40,
		marginBottom: 12,
		color:'skyblue'

	},
    iconView:{
        top:-27,
        marginLeft:30

    }

});

export default TutorialOptionScreen;


