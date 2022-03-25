import React, { useState } from 'react';
import {  Text, TextInput, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import {styles} from './Auth.style'



const NextAuth = ({ navigation }) => {
    const [hidePass, setHidePass] = useState(true);

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
                <TextInput placeholder='Eg. Phone Number' keyboardType='number-pad' maxLength={10} style={styles.inputFirst} />
                <Text style={styles.Label}>PassWord</Text>
                <TextInput placeholder='Eg. **************' secureTextEntry={hidePass ? true : false} multiline={false} style={styles.inputFirst} />
                <Text style={styles.forgetPass} onPress={() => navigation.push('forgotpassword')}>Forget Password?</Text>
            </View>
            <View style={styles.IconEye}>
                <Entypo name={hidePass ? 'eye-with-line' : 'eye'} size={24} color="#F5F5F5" style={styles.Icon} onPress={() => setHidePass(!hidePass)} />
            </View>
            <View style={styles.btnContainer}>
                <View style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={styles.btnText} onPress={() => navigation.push('home')}>Login</Text>
                </View>
                <View>
                    <Text style={styles.signup} onPress={() => navigation.navigate('registration')}>Create New Acoount</Text>
                </View>
            </View>
        </View>
    )
}

export default NextAuth

