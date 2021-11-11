import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
    Pressable,
    Button

} from 'react-native';
import ResetPasswordDetail from '../components/ResetPasswordDetail';



let user = {};
let uniqueCode = ''



export default function ResetPasswordScreen(props) {

    const [password, setPassWord] = useState('');
    const [verifyPassword, setVerifyPassWord] = useState('');
    const [code, setCode] = useState('')
    let newcode = props.navigation.getParam('code');
    let newemail = props.navigation.getParam('email')
    let newpassword = props.navigation.getParam('password')
    let newusername = props.navigation.getParam('username')

    console.log('code' + newcode);
    console.log('email' + newemail);
    console.log('password' + newpassword);
    console.log('username' + newusername);

    uniqueCode = newcode
    user = {
        code: newcode,
        email: newemail,
        password: newpassword,
        username: newusername
    }

    return (
        <View style={styles.body} >

            <Text style={styles.resetPasswordStyle}>Reset Password</Text>

            <ResetPasswordDetail
                placeholder='Enter your password'
                passwordHandler={function (value) { setPassWord(value) }}
                title='Password          '
            />
            <ResetPasswordDetail
                placeholder='Re-enter your password'
                passwordHandler={(value) => { setVerifyPassWord(value) }}
                title='verify password'
            />
            <Button title='show data' onPress={() => {

                console.log("passw" + password);
                console.log("veripass" + verifyPassword);

                console.log('new code  ' + newcode);
                console.log('line 96' + newcode.code);
                console.log(newemail);
                console.log(newpassword);
                console.log(newusername);


            }} />
            <Pressable style={styles.saveButtonStyle}
                onPress={async () => {
                    if (verifyPassword === password) {
                        if (password.length > 3) {
                            console.log('verify password to save' + verifyPassword);
                            Alert.alert('verifypassword =' + verifyPassword)
                            Alert.alert(newpassword)
                            Alert.alert(newemail)
                            Alert.alert(newusername)
                            try {

                                //state of user unchanged except user password
                                user = { ...user, password: verifyPassword }
                                //updating user password using setItem function
                                let updateUser = await AsyncStorage.setItem(newcode.code, JSON.stringify(user))
                                props.navigation.navigate('Welcome')

                            } catch (e) {
                                console.log(e);
                                Alert.alert(e);
                            }

                        } else {
                            console.log('code cant be less than 4');
                            Alert.alert('code cant be less than 4')
                        }


                    } else {
                        Alert.alert('password does not match !! try again');
                        console('password does not match !! try again');

                    }
                }}>

                <Text style={styles.saveTextStyle}> Save</Text>

            </Pressable>



        </View>
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
		paddingHorizontal: 80,
		fontSize: 25,
		fontStyle: "italic",
		borderColor: "skyblue",
		borderWidth: 5,
		borderRadius: 15,
		width: 250,
		alignSelf: "center"
	},

}


);


