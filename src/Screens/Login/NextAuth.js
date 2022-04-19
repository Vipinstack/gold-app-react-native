import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Alert, ToastAndroid } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { styles } from "./Auth.style";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url } from "../../Api/api";

const NextAuth = ({ navigation }) => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [apiUserName, setapiUserName] = useState("");

  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem("ACCESS_TOKEN");
      const Getdata = JSON.parse(value);
      if (Getdata.token) {
        navigation.navigate("home", { name: apiUserName });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const sinup = async () => {
    if (mobile != "" && password != "") {
      await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          mobile: mobile,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === 200) {
            // console.log(data);
            try {
              AsyncStorage.setItem("ACCESS_TOKEN", JSON.stringify(data));
            } catch (error) {
              console.log(error, "Error");
            }
            setapiUserName(data.data.name);
            navigation.navigate("home");
            ToastAndroid.showWithGravityAndOffset(
              `Thanks You Sunccessful Login ${data.data.name}`,
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              100,
              200
            );
          } else {
            ToastAndroid.showWithGravityAndOffset(
              `${data.message}`,
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              100,
              200
            );
          }
        });
    } else {
      ToastAndroid.showWithGravityAndOffset(
        `Please fill All Filed data !!`,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100,
        200
      );
    }
  };

  let [fontsLoaded] = useFonts({
    BreeSerif: require("../../../assets/fonts/BreeSerif.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Animatable.View style={styles.container} animation="fadeInUpBig">
      <View style={styles.inputFileds}>
        <Text style={styles.Label}>Mobile</Text>
        <TextInput
          placeholder="Eg. mobile"
          autoComplete={false}
          keyboardType="number-pad"
          maxLength={10}
          multiline={false}
          style={styles.inputFirst}
          value={mobile}
          onChangeText={(mobile) => setMobile(mobile)}
        />

        <Text style={styles.Label}>Password</Text>
        <TextInput
          placeholder="Eg. ***********"
          maxLength={10}
          secureTextEntry={hidePass ? true : false}
          multiline={false}
          style={styles.inputFirst}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />

        <Text
          style={styles.forgetPass}
          onPress={() => navigation.push("forgotpassword")}
        >
          Forget Password?
        </Text>
      </View>

      <View style={styles.IconEye}>
        <Entypo
          name={hidePass ? "eye-with-line" : "eye"}
          size={24}
          color="#F5F5F5"
          style={styles.Icon}
          onPress={() => setHidePass(!hidePass)}
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
          <Text style={styles.btnText} onPress={sinup}>
            Login
          </Text>
        </View>
        <View>
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate("registration")}
          >
            Create New Acoount
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default NextAuth;
