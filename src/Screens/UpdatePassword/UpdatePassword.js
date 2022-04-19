import { StyleSheet, View, Text, TextInput, ToastAndroid } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
import {url} from '../../Api/api';

const UpdatePassword = ({navigation}) => {
  const [TokenValue, setTokenValue] = useState("");
  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  React.useEffect(() => {
    getToken();
    updatePass();
  }, []);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("ACCESS_TOKEN");
      const Getdata = JSON.parse(value);
      setTokenValue(Getdata.token);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePass = async () => {
    if (oldpassword != "" && newpassword != "" && confirmpassword != "") {
        await fetch(`${url}/update_password`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Authorization':`Bearer ${TokenValue}`
            },
            body: JSON.stringify({
                'current_password': oldpassword,
                'new_password': newpassword,
                'confirm_password': confirmpassword,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.code === 200) {
                    ToastAndroid.showWithGravityAndOffset(
                        `Thanks You Sunccessful Update Password`,
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

console.log(TokenValue);
console.log(oldpassword);
console.log(newpassword);
console.log(confirmpassword);

  return (
    <Animatable.View style={styles.container} animation="fadeInUpBig">
      <TextInput
        placeholder="Eg. Current Password"
        style={styles.inputFirst}
        value={oldpassword}
        onChangeText={(e) => setOldPassword(e)}
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
        onChangeText={(e) => setconfirmPassword(e)}
      />
      <Text style={styles.btn} onPress={updatePass}>
        Update Password
      </Text>
    </Animatable.View>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    width:'100%',
    
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
