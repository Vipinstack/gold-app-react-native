import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoldPriceCalculation from './GoldPriceCalculation'
import { useRoute } from '@react-navigation/native'


const Purchase = ({navigation}) => {
    const route = useRoute()
    const sellersName = route.params.name;
    // console.log(sellersName);


    return (
        <View style={styles.contentView}>
            <View style={styles.sellers_name}>
            <Image
                source={{ uri: 'https://i.postimg.cc/vBBTtLKF/spinner-removebg-preview.png' }}
                style={{ width: 80, height: 80}}
            />
            <Text style={styles.Jwellers}>{sellersName}</Text>
            </View>
            <View style={styles.gold_img_screen}>
             <Text style={styles.title}>Today Price</Text>
             <Image
                source={require('../../../assets/gold.png')}
                style={styles.goldImg}
             />
            </View>
            <GoldPriceCalculation  navigation={navigation}/>
        </View>
    )
}

export default Purchase

const styles = StyleSheet.create({
    contentView: {
        width: '100%',
    },
    sellers_name:{
        flexDirection: 'row',
    },
    Jwellers: {
        paddingVertical: 30,
        fontSize: 20
    },
    goldImg: {
        width: 200,
        height: 200
    },
    gold_img_screen:{
        width:200,
        height:100,
        marginHorizontal:74
        
    },
    title: {
        paddingTop:20,
        marginLeft:40,
        fontSize: 30,
        fontWeight: 'bold'
    },
})