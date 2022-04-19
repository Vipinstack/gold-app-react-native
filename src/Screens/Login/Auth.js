import React from 'react'
import { KeyboardAvoidingViewBase, ScrollView, StyleSheet, Text, View } from 'react-native'
import NextAuth from './NextAuth'
import { useFonts } from 'expo-font'


const Auth = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    BreeSerif: require('../../../assets/fonts/BreeSerif.ttf')
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Welcome!</Text>
      <NextAuth navigation={navigation} />
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
    position: 'relative',
  },
  login: {
    position: 'absolute',
    top: 160,
    left: 30,
    fontSize: 30,
    color: "#fff",
    fontFamily: 'BreeSerif'
  },
})