import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import NextSingup from './NextSingup';

const Singup = ({navigation}) => {

  let [fontsLoaded] = useFonts({
    BreeSerif:require('../../../assets/fonts/BreeSerif.ttf')
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.login}>Registration!</Text>
      <NextSingup  navigation={navigation}/>
    </View>
  )
}

export default Singup

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#009387",
        position:'relative',
    },
    login:{
        position:'absolute',
        top:80,
        left:30,
        fontSize:30,
        color:"#fff",
        fontFamily:'BreeSerif'
        },
})