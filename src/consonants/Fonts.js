import React, { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'
import { useFonts } from 'expo-font';
import { styles } from './Auth.style'
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';


const NextAuth = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const [hidePass, setHidePass] = useState(true);

    const sinup = async () => {
        if (password != "" && mobile != "") {
            await fetch('http://jwellery.divashudh.com/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'password': password,
                    'mobile': mobile,
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.message);
                    setError("");
                    Alert.alert(`Thanks You Sunccessful Login ${password} ${mobile} ${Adress}`);
                    navigation.navigate('home');

                })

        } else {
            setError('Hey ! should not be empty')
            Alert.alert('Please fill All Filed data !!')
        }
    }


    let [fontsLoaded] = useFonts({
        BreeSerif: require('../../../assets/fonts/BreeSerif.ttf')
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <Animatable.View style={styles.container}
            animation="fadeInUpBig"
        >
            <View style={styles.inputFileds}>
                <TextInput placeholder='Eg. mobile'
                    autoComplete={false}
                    keyboardType='number-pad' maxLength={10}
                    multiline={false} style={styles.inputFirst}
                    value={mobile}
                    onChangeText={(mobile) => setMobile(mobile)}
                />
                <Text style={styles.error}>{error}</Text>

                <TextInput
                    style={styles.inputFirst}
                    placeholder="Password"
                    autoCompleteType="password"
                    secureTextEntry={hidePass ? true : false}
                    value={password}
                    onChangeText={(password) => setpassword(password)}
                >
                    <Icon
                        password={hidePass ? 'eye-slash' : 'eye'}
                        size={15}
                        color="grey"
                        onPress={() => setHidePass(!hidePass)}
                    />
                </TextInput>
                <Text style={styles.error}>{error}</Text>



                <Text style={styles.forgetPass} onPress={() => navigation.push('forgotpassword')}>Forget Password?</Text>
            </View>

            <View style={styles.btnContainer}>
                <View style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={styles.btnText}
                        onPress={sinup}
                    >Login</Text>
                </View>
                <View>
                    <Text style={styles.signup}
                        onPress={() => navigation.navigate('registration')}
                    >Create New Acoount</Text>
                </View>
            </View>
        </Animatable.View>
    )
}

export default NextAuth

