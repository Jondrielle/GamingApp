import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text, Pressable } from 'react-native';
import ResetPasswordDetail from '../components/ResetPasswordDetail';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconTextImageDetail from '../components/IconTextImageDetail';
import LoginButtonDetail from '../components/LoginButtonDetail'
import { Video } from 'expo-av';

let screenNavigation = {
    screen:'unique'
}

export default function UniqueKeyScreen(props) {
    const [code, setCode] = useState('')
    const [verifycode, setVerifyCode] = useState('')

    const [isCode, verdict] = useState(true)
    const [user, setUser] = useState({})

    return (
        <View style={styles.body} >
            <View style={styles.innerView}>
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

                <Text style={{marginTop:30}}></Text>
                <Text style={styles.resetPasswordStyle}>Code Verification</Text>
                <IconTextImageDetail title='   code'
                    image='code'
                    placeholder='enter code'
                    viewInput={true}
                    handler={function (value) {
                        setCode(value)
                        verdict(false)

                    }} />
                <Text style={styles.errorStyle}>{code.length > 3 ? null : ' code cannot be less than 4 characters'}</Text>

                <IconTextImageDetail title='   verify code'
                    image='code'
                    placeholder='re-enter code'
                    viewInput={true}
                    handler={function (value) {
                        setVerifyCode(value)
                        verdict(false)

                    }} />
                <Text style={styles.errorStyle}>{verifycode === code ? null : ' code mismatch !! try again'}</Text>

                <LoginButtonDetail title='Confirm Code'
                    handler={async function () {

                        if (verifycode === code) {

                            try {

                                let isValid = true
                                let count = 1

                                const keys = await AsyncStorage.getAllKeys();
                                for (const key of keys) {
                                    console.log('user ' + count++);
                                    if (code.length > 0) {
                                        if (code === key) {
                                            verdict(isValid)
                                            console.log(key +'line 60');
                                            console.log(key);
                                            console.log(typeof key,key,'line 62');

                                            const val = await AsyncStorage.getItem(key);
                                            console.log(val,typeof val,'line 65');
                                            let newuser = JSON.parse(val)
                                            console.log(newuser,'line 67');
                                            setUser(newuser)
                                            console.log(newuser + 'line 69',typeof newuser);

                                            console.log('line 47' + typeof user, user);

                                            console.log('item ' + user + " === " + "key " + key + " ? ==" + isValid);
                                            props.navigation.navigate('reset', newuser)

                                        } else if (count === keys.length && isCode)
                                            Alert.alert('incorrect code')
                                        console.log('incorrect code');


                                    } else {
                                        Alert.alert('code field cant be empty')
                                    }

                                }

                            } catch (error) {
                                console.log(error);
                            }
                        } else {
                            console.log('code does not match');
                            Alert.alert('code does not match');
                        }
                    }} />
                    
			<View style={styles.signUpView}>
				<Text style={styles.signUpText1}>needing help ?</Text>

				<Pressable onPress={() => {

					props.navigation.navigate('option',screenNavigation)
				}}>
					<Text style={styles.signUpText2}>Watch tutorials</Text>

				</Pressable>
            </View>

            </View >
        </View >

    )

}

const styles = StyleSheet.create({

    body: {
        flex: 1,
		backgroundColor: '#1B322D',
		alignItems:'center'
    },
    innerView: {
        flex: 1,
		backgroundColor: '#1B322D',
		borderColor: '#1B322D',
		margin: 3,
		borderWidth: 4,
		width:350


    },
    input: {
        borderWidth: 2,
        width: 200,
        height: 50,
        borderColor: 'black',
        padding: 3,
        margin: 1,

    },
    saveButtonStyle: {

        marginTop: 400,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black',
        width: 100,
        height: 20,
        backgroundColor: 'blue'

    },

    resetPasswordStyle: {
        alignSelf: 'center',
		fontSize: 40,
		marginBottom: 10,
		color:'skyblue'
    },

    saveTextStyle: {
        alignSelf: 'center',
        padding: 2

    },
    errorStyle: {
        color: 'red',
        marginLeft: 35
    },
    errorStyle2: {
        color: 'red',
        marginLeft: 35,
        marginBottom: 30
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
		right:-10

	},
	circleicon: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		alignSelf: 'center',
        justifyContent:'center'

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
		right:-10

	},signUpView: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 25,



	},
	signUpText1: {
		fontSize: 20,
		color:'skyblue',
        marginLeft:20

	},
	signUpText2: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 10,
		marginRight: 35,
		color:'#3063a0',
	}


}


);


