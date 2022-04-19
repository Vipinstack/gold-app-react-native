import { StyleSheet, Text, View, TextInput, ToastAndroid, ScrollView } from "react-native";
import React,{useEffect, useState} from "react";
import { useFonts } from "expo-font";
import { styles } from "./Forgot.style";
import {url} from '../../Api/api';
import * as Animatable from "react-native-animatable";


const NextForgotScreen = ({ navigation }) => {
  const [forgotphone, setForgotPhone] = useState("");

      const forgotPass = async () => {
          
        if (forgotphone != "") {
            await fetch(`${url}/reset_password`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    'mobile': forgotphone,
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.code === 200) {
                        console.log(data.reset_url);
                        ToastAndroid.showWithGravityAndOffset(
                            `Thanks You Sunccessful`,
                            ToastAndroid.LONG,
                            ToastAndroid.TOP,
                            100,
                            200
                            );      
                            navigation.navigate('reset_password', {reset:data.reset_url});
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
    

  let [fontsLoaded] = useFonts({
    BreeSerif: require("../../../assets/fonts/BreeSerif.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <Animatable.View style={styles.container} animation="fadeInUpBig">
        <ScrollView>
      <View style={styles.inputFileds}>
        <Text style={styles.Label}>Phone</Text>
        <TextInput placeholder="Eg. Phone Number" style={styles.inputFirst} 
            keyboardType="number-pad"
            maxLength={10}
            value={forgotphone}
            onChangeText={(e)=>setForgotPhone(e)}
        />
      </View>
      <View style={styles.btnContainer}>
        <View
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.btnText} onPress={() =>forgotPass()}>
            Reset Password
          </Text>
        </View>
      </View>
      </ScrollView>
    </Animatable.View>
  );
};

export default NextForgotScreen;
