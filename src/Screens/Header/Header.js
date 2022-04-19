import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';
import {useRoute} from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";



const Header = () => {
  const [userName, setuserName] = React.useState("")
  React.useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem("ACCESS_TOKEN");
      const Getdata = JSON.parse(value);
      console.log(Getdata)
      setuserName(Getdata.data.name)
     
    } catch (error) {
      console.log(error);
    }
  },[]);
  // const route = useRoute()
    // console.log(route.params.name);

 
  const [loaded] = useFonts({
    BreeSerif: require('../../../assets/fonts/BreeSerif.ttf')
  })

  if (!loaded) {
    return <Text>Loading..</Text>
  }

  
 

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello, {userName}</Text>
      <FontAwesome name="navicon" size={35} color="black" style={styles.icon} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 120,
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-between',

  },
  userName: {
    marginTop:60,
    fontSize: 23,
    fontFamily:'BreeSerif'
  },
  icon: {
    marginTop:65,
  },

})