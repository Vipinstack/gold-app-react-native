import { Alert, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Logout = ({navigation}) => {
   
    useEffect( async ()=>{
        try {
            await AsyncStorage.removeItem("ACCESS_TOKEN");
            navigation.navigate("login");
            ToastAndroid.showWithGravityAndOffset(
              `logOut Successfully !!`,
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              100,
              200
            );
           
        }
        catch(exception) {
            return false;
        }
    })

  return (
    <View>
      <Text>Logout</Text>
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({})