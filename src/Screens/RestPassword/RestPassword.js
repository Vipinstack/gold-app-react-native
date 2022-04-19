import { StyleSheet, Text, View, TextInput, ToastAndroid } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useRoute } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import {url} from '../../Api/api';

const RestPassword = ({navigation}) => {    
    const [token, setToken] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const route = useRoute();



    const ForgotApi = async () => {
        await fetch(route.params.reset, {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
              if(data.code === 200){
                  setToken(data.token);
                  console.log(data.token);
              }else{
                  console.log(data.status);
                  navigation.navigate('forgotpassword');
              }
          })
          .catch((e) => {
            console.log(e, "Error inside api fetch gold price");
          });
      };


      const resetPass = async () => {
        if (token != "" && newpassword !="" && confirmpassword !="" ) {
            await fetch(`${url}/submit_reset_password`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    'token': token,
                    'new_password':newpassword,
                    'confirm_password':confirmpassword
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.code === 200) {
                        console.log(data.message);
                        ToastAndroid.showWithGravityAndOffset(
                            `${data.message}`,
                            ToastAndroid.LONG,
                            ToastAndroid.TOP,
                            100,
                            200
                            );      
                            navigation.navigate('login');
                    } else {
                        ToastAndroid.showWithGravityAndOffset(
                            `${data.message}`,
                            ToastAndroid.LONG,
                            ToastAndroid.TOP,
                            100,
                            200
                          );      
                    }
                })
    
        } else {
            ToastAndroid.showWithGravityAndOffset(
                `Please fill All Filed data !!`,
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                100,
                200
              );      
        }
    }

    useEffect(() => {
        ForgotApi();
    }, [])

  return (
    <Animatable.View style={styles.container} animation="fadeInUpBig">
    <TextInput
      placeholder="Eg. Current Password"
      style={styles.inputFirst}
      value={token}
      />
    <TextInput
      placeholder="Eg. New Password"
      style={styles.inputFirst}
      value={newpassword}
      onChangeText={(e) => setNewPassword(e)}
      />
    <TextInput
      placeholder="Eg. Confirm Password"
      style={styles.inputFirst}
      value={confirmpassword}
      onChangeText={(e) => setConfirmPassword(e)}
    />
    <Text style={styles.btn} onPress={resetPass}>
      Update Password
    </Text>
  </Animatable.View>
  )
}

export default RestPassword

    const styles = StyleSheet.create({
    container: {
      paddingTop: 70,
      width:'100%'
      
    },
    inputFirst: {
      backgroundColor: '#FFF',
      padding: 5,
      margin: 10,
      marginHorizontal: 18,
      width: '80%',
      borderRadius: 5,
      borderBottomColor:'gray',
      borderBottomWidth:1,
      shadowColor: "#000",
      marginHorizontal: 30,      
      
    },
    btn: {
      marginTop: 30,
      padding: 5,
      backgroundColor: "#00BA00",
      borderRadius: 8,
      textAlign: "center",
      lineHeight: 30,
      color: "white",
      fontWeight: "bold",
      width:'80%',
      marginHorizontal: 30,     
    },
  });