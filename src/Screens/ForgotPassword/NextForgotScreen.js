import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { styles } from './Forgot.style'

const NextForgotScreen = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        BreeSerif: require('../../../assets/fonts/BreeSerif.ttf')
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputFileds}>
                <Text style={styles.Label}>Phone</Text>
                <TextInput placeholder='Eg. Phone Number' style={styles.inputFirst} />
            </View>
            <View style={styles.btnContainer}>
                <View style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={styles.btnText} onPress={() =>navigation.goBack()}>Reset Password</Text>
                </View>
            </View>
        </View>
    )
}

export default NextForgotScreen

