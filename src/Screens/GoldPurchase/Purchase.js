import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoldPriceCalculation from './GoldPriceCalculation'

const Purchase = ({navigation}) => {
    return (
        <View style={styles.contentView}>
            <Image
                source={{ uri: 'https://i.postimg.cc/vBBTtLKF/spinner-removebg-preview.png' }}
                style={{ width: 80, height: 80 }}
            />
            <Text style={styles.Jwellers}>Caratlane Jwellers</Text>
            
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
        position: 'relative',
        // paddingLeft: 4, 
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },
    Jwellers: {
        paddingVertical: 30,
        fontSize: 20
    },
    title: {
        position: "absolute",
        top: 60,
        left: 40,
        fontSize: 30,
        fontWeight: 'bold'
    },
    goldImg: {
        position: 'absolute',
        top: 100,
        left: 0,
        width: 200,
        height: 200
    },
    gold_img_screen:{
        position: 'absolute',
        top: 40,
        left: 70,
        width:200,
        height:100
    }
})