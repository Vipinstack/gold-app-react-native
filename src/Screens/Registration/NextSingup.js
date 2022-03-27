import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useFonts } from 'expo-font';
import { styles } from './Singup.style';
import * as Animatable from 'react-native-animatable';

const NextSingup = ({ navigation }) => {
    const [hidePass, setHidePass] = useState(true);
    const [countory, setCountory] = useState('Country');
    const [state, setState] = useState('State');
    const [city, setCity] = useState('City');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [adress, setAdress] = useState('');
    const [error, setError] = useState('');

    const sinup = async () => {
        if (name !="" && mobile != "" && password != "" && adress !="" && countory !="" && state !="" && city !="") {
            await fetch('http://jwellery.divashudh.com/api/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'name': name,
                    'mobile': mobile,
                    'password':password,
                    'adress':adress,
                    'countory':countory,
                    'state':state,
                    'city':city 
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

    const handler = () => {
        Alert.alert(
            "Successfull Registration !!",
            "",
            [
                {
                    text: "ok",
                },
            ],
        );
    }
    return (
        <>
            <Animatable.View style={styles.container}
                animation="fadeInUpBig"
            >
                <View style={styles.inputFileds}>
                    <TextInput
                        placeholder='Eg. Name'
                        style={styles.inputFirst}
                        value={name}
                        onChangeText={(name) => setName(name)}
                    />
                    <Text style={styles.error}>{error}</Text>

                    <TextInput
                        placeholder='Eg. Mobile'
                        keyboardType='number-pad'
                        maxLength={10}
                        style={styles.inputFirst}
                        value={mobile}
                        onChangeText={(mobile)=>setMobile(mobile)}
                        />
                    <Text style={styles.error}>{error}</Text>
                    <TextInput
                        placeholder='Eg. **************'
                        secureTextEntry={hidePass ? true : false}
                        style={styles.inputFirst}
                        value={password}
                        onChangeText={(password)=>setPassword(password)}
                        />
                    <Text style={styles.error}>{error}</Text>
                    <TextInput
                        placeholder='Eg. Address'
                        style={styles.inputFirst}
                        value={adress}
                        onChangeText={(adress)=>setAdress(adress)}
                        />
                    <Text style={styles.error}>{error}</Text>

                    <View style={styles.picker}>
                        <Picker
                            selectedValue={countory}
                            onValueChange={(itemValue, itemIndex) =>
                                setCountory(itemValue)
                            }>
                            <Picker.Item label="Country" value="" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={state}
                            onValueChange={(itemValue, itemIndex) =>
                                setState(itemValue)
                            }>
                            <Picker.Item label="State" value="" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={city}
                            onValueChange={(itemValue, itemIndex) =>
                                setCity(itemValue)
                            }>
                            <Picker.Item label="City" value="" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>
                    </View>
                </View>
                <View style={styles.IconEye}>
                    <Entypo
                        name={hidePass ? 'eye-with-line' : 'eye'}
                        size={24} color="#F5F5F5"
                        style={styles.Icon}
                        onPress={() => setHidePass(!hidePass)}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <View>
                        <Text style={styles.btnText} onPress={sinup}>Signup</Text>
                    </View>
                    <View>
                        <Text style={styles.signup} onPress={() => { navigation.navigate('login') }}>Already Signup</Text>
                    </View>
                </View>
            </Animatable.View>
        </>

    )
}

export default NextSingup

