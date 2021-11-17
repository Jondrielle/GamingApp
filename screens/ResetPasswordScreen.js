import React, { useState, Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    StyleSheet,
    Text,
    Alert,
    Button

} from 'react-native';
import IconTextImageDetail from '../components/IconTextImageDetail'
import LoginButtonDetail from '../components/LoginButtonDetail'

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
            <View style={styles.innerView}>


                <Text style={styles.resetPasswordStyle}>Reset Password</Text>

                <IconTextImageDetail title='     password'
                    image='key'
                    placeholder='enter password'
                    viewInput={true}
                    handler={function (value) { setPassWord(value) }}

                />
                <Text style={styles.errorStyle}>{password.length > 3 ? null : 'password cannot be less than 4 characters'}</Text>

                <IconTextImageDetail title='    verify password'
                    image='key'
                    placeholder='re-enter password'
                    viewInput={true}
                    handler={(value) => { setVerifyPassWord(value) }}

                />
                <Text style={styles.errorStyle}>{verifyPassword === password ? null : ' password re-entered is not a match'}</Text>

                <View >
                    
                    <Text style={{ marginBottom: 30 }}></Text>
                    <LoginButtonDetail title='confirm password'
                        handler={async () => {
                            console.log("passw" + password);
                            console.log("veripass" + verifyPassword);

                            console.log('new code  ' + newcode);
                            // console.log('line ' + newcode.code);
                            console.log(newemail);
                            console.log(newpassword);
                            console.log(newusername);

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


                        }} />

                </View>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center'
    },
    innerView: {
        height: 700,
        width: 350,
        backgroundColor: 'orange',
        borderWidth: 5,
        borderColor: 'black',
        marginTop: 30

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
    errorStyle: {
        color: 'red',
        marginLeft: 35
    },
    errorStyle2: {
        color: 'red',
        marginLeft: 30,
        marginBottom: 30
    }

}


);


