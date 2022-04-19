import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoldPrice from './GoldPrice'
import Slider from './Slider'
import Header from '../Header/Header'

const Main = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header />
            <Slider navigation={navigation} />
            <GoldPrice navigation={navigation} />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
    },
})