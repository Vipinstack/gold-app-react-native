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
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20,
    },
})