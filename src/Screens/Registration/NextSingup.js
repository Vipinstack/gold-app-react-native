import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { useFonts } from 'expo-font';
import  {styles} from './Singup.style'

const NextSingup = ({ navigation }) => {
    const [hidePass, setHidePass] = useState(true);
    const [countory, setCountory] = useState('Country');
    const [state, setState] = useState('State');
    const [city, setCity] = useState('City');

    let [fontsLoaded] = useFonts({
        BreeSerif: require('../../../assets/fonts/BreeSerif.ttf')
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const handler = () =>{
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
            <View style={styles.container}>
                <View style={styles.inputFileds}>
                    <TextInput placeholder='Eg. Name' style={styles.inputFirst} />
                    <TextInput placeholder='Eg. Mobile' keyboardType='number-pad' maxLength={10} style={styles.inputFirst} />
                    <TextInput placeholder='Eg. **************' secureTextEntry={hidePass ? true : false} style={styles.inputFirst} />
                    <TextInput placeholder='Eg. Address' style={styles.inputFirst} />

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
                        <Text style={styles.btnText} onPress={handler}>Signup</Text>
                    </View>
                    <View>
                        <Text style={styles.signup} onPress={() => { navigation.navigate('login') }}>Already Signup</Text>
                    </View>
                </View>
            </View>
        </>

    )
}

export default NextSingup

