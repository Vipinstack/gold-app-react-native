import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const Slider = ({navigation}) => {


    return (

        <>
        <ScrollView
                horizontal={true}
                style={{
                    position: 'absolute',
                    top: 130,
                    left: 20,
                }}
            >

                <View style={[styles.gold_holding]}>
                    <Text style={styles.today_api_price}>1.05 &nbsp;gr</Text>
                    <Text style={styles.today_api_price_title}>Gold Holding</Text>
                </View>
                <View style={[styles.my_wallet]}>
                    <Text style={styles.today_api_price}><FontAwesome5 name="rupee-sign" size={24} color="black" /> &nbsp; 40,045</Text>
                    <Text style={styles.today_api_price_title}>My Wallet</Text>
                </View>
                <View style={[styles.gold_holding]}>
                    <Text style={styles.today_api_price}>1.05 &nbsp;gr</Text>
                    <Text style={styles.today_api_price_title}>Gold Holding</Text>
                </View>
                <View style={[styles.my_wallet]}>
                    <Text style={styles.today_api_price}>1.05gr</Text>
                    <Text style={styles.today_api_price_title}>Gold Holding</Text>
                </View>

            </ScrollView>
        </>
    )
}

export default Slider

const styles = StyleSheet.create({
    gold_holding: {
        backgroundColor: '#F0A500e6',
        width: 150,
        height: 100,
        marginLeft: 3,
        borderRadius: 4,
        zIndex: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    today_api_price: {
        position: 'absolute',
        fontWeight: 'bold',
        top: 23,
        left: 30,
        fontSize: 25,
    },
    today_api_price_title: {
        position: 'absolute',
        fontWeight: 'bold',
        bottom: 10,
        right: 10,
        fontSize: 17,
    },
    my_wallet: {
        backgroundColor: '#21BF73cc',
        width: 150,
        height: 100,
        marginLeft: 12,
        borderRadius: 4,
    },


})