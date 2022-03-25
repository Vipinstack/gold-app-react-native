import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import NextForgotScreen from './NextForgotScreen'

const Forgot = ({navigation}) => {
 
  return (
    <View style={styles.container}>
   <Image source={require('../../../assets/log.png')} style={{width:"100%", height:400}} />
    <NextForgotScreen navigation={navigation} />
  </View>
  )
}
 
export default Forgot

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#009387",
        position:'relative',
    },
    login:{
        position:'absolute',
        top:250,
        left:30,
        fontSize:30,
        color:"#fff"
        },
})