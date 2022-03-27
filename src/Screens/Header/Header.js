import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import {useRoute} from '@react-navigation/native'


const Header = () => {
  const route = useRoute()
    console.log(route.params.name);
 
  const [loaded] = useFonts({
    BreeSerif: require('../../../assets/fonts/BreeSerif.ttf')
  })

  if (!loaded) {
    return <Text>Loading..</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello, {route.params.name}</Text>
      <FontAwesome name="navicon" size={35} color="black" style={styles.icon} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 120,

  },
  userName: {
    position: 'absolute',
    top: 50,
    left: 0,
    fontSize: 23,
    fontFamily:'BreeSerif'
  },
  icon: {
    position: 'absolute',
    right: 2,
    top: 55,
  },

})