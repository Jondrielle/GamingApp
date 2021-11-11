import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TextInput, Alert, Pressable, Button, LogBox } from 'react-native';
import ResetPasswordDetail from '../components/ResetPasswordDetail';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function UniqueKeyScreen(props) {
    const [code, setCode] = useState('')

    const [isCode, verdict] = useState(true)
    const [user, setUser] = useState({})

    return (
        <View style={styles.body} >

            <Text style={styles.resetPasswordStyle}>Reset Password</Text>

            <ResetPasswordDetail
                placeholder='Enter your code'
                passwordHandler={function (value) {

                    setCode(value)
                    verdict(false)

                }}
                title='Code         '
            />

            <TouchableOpacity style = {styles.loginButton}  onPress={async () => {

                try {

                    let isValid = true
                    let count = 1

                    const keys = await AsyncStorage.getAllKeys();
                    for (const key of keys) {
                        console.log('user ' + count++);
                        if (code.length > 0) {
                            if (code === key) {
                                verdict(isValid)

                                const val = await AsyncStorage.getItem(key);

                                setUser(JSON.parse(val))

                                console.log('line 47'+typeof user, user);

                                console.log('item ' + user + " === " + "key " + key + " ? ==" + isValid);
                                props.navigation.navigate('reset', user)
                                
                            }else if(count === keys.length && isCode)
                                Alert.alert('incorrect code')
                                console.log('incorrect code');
                            

                        } else {
                            Alert.alert('code field cant be empty')
                        }

                    }
                  
                } catch (error) {
                    console.log(error);
                }

            }} >
                <Text> ENTER CODE</Text>
            </TouchableOpacity>


        </View >
    )

}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: 'orange'
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
        fontSize: 40,
        margin: 30
    },

    saveTextStyle: {
        alignSelf: 'center',
        padding: 2

    },
    loginButton: {
		marginHorizontal: 70,
		borderColor: "blue",
		paddingHorizontal: 10,
		fontSize: 30,
		fontStyle: "italic",
		borderColor: "skyblue",
		borderWidth: 5,
		borderRadius: 15,
		width: 250,
		alignItems: "center",
        marginTop:50,
        height:50
	},

}


);


