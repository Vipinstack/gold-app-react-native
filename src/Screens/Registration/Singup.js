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
      <Text style={styles.Register}>Registration!</Text>
      <NextSingup  navigation={navigation}/>
    </View>
  )
}

export default Singup

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#009387",
        position:'relative',
    },
    Register:{
        position:'absolute',
        top:120,
        left:30,
        fontSize:30,
        color:"#fff",
        fontFamily:'BreeSerif'
        },
})