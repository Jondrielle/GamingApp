import React from "react";
import { View, StyleSheet, Text } from "react-native"
import LoginButtonDetail from "../components/LoginButtonDetail";
import TabNavigationRoutes from "../components/TabNavigationRoutes";

import { Video } from "expo-av";

let vidtext = '';
let vidlink = ''
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

let message ='back to ';



const VideoPlayerScreen = function (props) {

    vidtext = props.navigation.getParam('text')
    vidlink = props.navigation.getParam('video')
    route = props.navigation.getParam('screen')

    screen = screenPrompt[ props.navigation.getParam('screen')]
    message = message + screen


    console.log(vidtext);
    console.log(vidlink);

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
<Text style={styles.text}>{vidtext}</Text>
        <View style={styles.background}>
            <Video
                source={vidlink}
                useNativeControls
                resizeMode='stretch'
                style={styles.videoplayerstyle}
            />
            <View style={{marginTop:50,marginBottom:30}}>
                <LoginButtonDetail
                    title={message}
                    colorChange={true}
                    handler={() => {
                        props.navigation.navigate("Tab");
                    }}
                />
            </View>

        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        backgroundColor: '#1B322D',
    },

    header: {
        fontSize: 20,
        padding: 5,
        color: 'black',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    text: {
        fontSize: 30,
        color: 'skyblue',
        margin: 10
    },

    videoplayerstyle: {

        height: 460,
        width: 300,
        marginTop: 40,
        marginLeft: 100,
        marginRight: 100,
        alignSelf: 'center'


    },
    background: {
        backgroundColor: '#1B322D',
    },
    circleShape: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		backgroundColor: "blue",
		marginLeft: 10,
		justifyContent: 'center',
		marginTop: 20,
		borderWidth: 5,
		borderColor: "blue",
		right:-10

	},
	circleicon: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		alignSelf: 'center',
        justifyContent:'center'

	}
});



export default VideoPlayerScreen;