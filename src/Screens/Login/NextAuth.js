import React,{useState} from 'react';
import { Text, TextInput, View, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { styles } from './Auth.style'
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';


const NextAuth = ({ navigation }) => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [hidePass, setHidePass] = useState(true);


    const sinup = async () => {
        if (mobile != "" && password != "") {
            await fetch('http://jwellery.divashudh.com/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'mobile': mobile,
                    'password': password,
                })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if(data.code === 200){
                        // setError("");
                        navigation.navigate('home', { name: data.data.name });
                        Alert.alert(`Thanks You Sunccessful Login ${data.data.name}`);
                   }else{
                       alert(data.message);
                       }
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

                <Text style={styles.Label}>Mobile</Text>
                <TextInput 
                    placeholder='Eg. mobile'
                    autoComplete={false}
                    keyboardType='number-pad' 
                    maxLength={10}
                    multiline={false} 
                    style={styles.inputFirst}
                    value={mobile}
                    onChangeText={(mobile) => setMobile(mobile)}
                />
                <Text style={styles.error}>{error}</Text>


                <Text style={styles.Label}>Password</Text>
                <TextInput 
                placeholder='Eg. ***********' 
                maxLength={10} 
                secureTextEntry={hidePass ? true : false} 
                multiline={false} 
                style={styles.inputFirst} 
                value={password}
                onChangeText={(password) => setPassword(password)}                
                />
                <Text style={styles.error}>{error}</Text>

                <Text style={styles.forgetPass} onPress={() => navigation.push('forgotpassword')}>Forget Password?</Text>
            </View>


            <View style={styles.IconEye}>
                <Entypo name={hidePass ? 'eye-with-line' : 'eye'} size={24} color="#F5F5F5" style={styles.Icon} onPress={() => setHidePass(!hidePass)} />
            </View>

            <View style={styles.btnContainer}>
                <View style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                    <Text style={styles.btnText} onPress={sinup}>Login</Text>
                </View>
                <View>
                    <Text style={styles.signup} onPress={() => navigation.navigate('registration')}>Create New Acoount</Text>
                </View>
            </View>
        </Animatable.View>
    )
}

export default NextAuth

