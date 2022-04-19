import { StyleSheet, Text, View, TextInput, Alert, ImageComponent, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useFonts } from 'expo-font';
import { styles } from './Singup.style';
import * as Animatable from 'react-native-animatable';
import { url } from '../../Api/api';

const NextSingup = ({ navigation }) => {
    const [hidePass, setHidePass] = useState(true);
    const [country, setCountry] = useState(3);
    const [state, setState] = useState([]);
    const [stateId, setStateId] = useState();
    const [cityId, setCityId] = useState();
    const [city, setCity] = useState([]);
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [adress, setAdress] = useState('');
    const [error, setError] = useState('');
    const [value, setValue] = useState([]);
    const [visible, setvisible] = useState(true)

    useEffect(async () => {
        const resp = await fetch(`${url}/get_states/101`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }).then(resp => resp.json())
            .then(data => {
                setState(data);
            })

    }, []);


    const getCity = async (e) => {

        const res = await fetch(`${url}/get_cities/${e}`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                setCity(result);
            })
    }







    const sinup = async () => {
        if (name != "" && mobile != "" && password != "" && adress != "" && country != "" && state != "" && city != "") {
            await fetch(`${url}/register`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'name': name,
                    'mobile': mobile,
                    'password': password,
                    'address': adress,
                    'country': country,
                    'state': stateId,
                    'city': cityId
                })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.code === 200) {
                        // setError("");
                        ToastAndroid.showWithGravityAndOffset(
                            `Thanks You Sunccessful Registration ${data.data.name}`,
                            ToastAndroid.LONG,
                            ToastAndroid.TOP,
                            100,
                            200
                            );      
                            navigation.navigate('login');
                        // Alert.alert(`${data.message}`);
                    } else {
                        ToastAndroid.showWithGravityAndOffset(
                            `${data.message}`,
                            ToastAndroid.LONG,
                            ToastAndroid.TOP,
                            100,
                            200
                          );      
                        // alert(data.message);
                    }
                })

        } else {
            // if(name != "" && mobile != "" && password != "" && adress != "" && country != "" && state != "" && city != ""){
                // setError('Hey ! should not be empty');
            // }else{
                // setError('okky');
            // }
            ToastAndroid.showWithGravityAndOffset(
                `Please fill All Filed data !!`,
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                100,
                200
              );      
            // Alert.alert('Please fill All Filed data !!')
        }
    }


    let [fontsLoaded] = useFonts({
        BreeSerif: require('../../../assets/fonts/BreeSerif.ttf')
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }


    const _renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.name}</Text>
            </View>
        );
    };

    const handlerCountry = (e) => {
        setState(country);
    }
    const handlerState = (e) => {
        setStateId(e)
        setvisible(false)
        getCity(e)
    }
    const handlerCity = (e) => {
        setCityId(e);
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

                    <TextInput
                        placeholder='Eg. Mobile'
                        keyboardType='number-pad'
                        maxLength={10}
                        style={styles.inputFirst}
                        value={mobile}
                        onChangeText={(mobile) => setMobile(mobile)}
                    />
                    <TextInput
                        placeholder='Eg. **************'
                        secureTextEntry={hidePass ? true : false}
                        style={styles.inputFirst}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                    <TextInput
                        placeholder='Eg. Address'
                        style={styles.inputFirst}
                        value={adress}
                        multiline
                        onChangeText={(adress) => setAdress(adress)}
                    />

                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        containerStyle={styles.shadow}
                        iconStyle={styles.iconStyle}
                        data={state}
                        search
                        maxHeight={400}
                        labelField={"name"}
                        valueField={"name"}
                        placeholder="India (Default)"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                            // setValue(item.id);
                            handlerCountry(item.id);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        )}
                        renderItem={item => _renderItem(item)}
                        // // textError="Error"
                        disable={true}
                    />


                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        containerStyle={styles.shadow}
                        iconStyle={styles.iconStyle}
                        data={state}
                        search
                        maxHeight={400}
                        labelField={"name"}
                        valueField={"name"}
                        placeholder="India state"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                            handlerState(item.id)
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        )}
                        renderItem={item => _renderItem(item)}
                        // // textError="Error"
                    />
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        containerStyle={styles.shadow}
                        iconStyle={styles.iconStyle}
                        data={city}
                        search
                        maxHeight={400}
                        labelField={"name"}
                        valueField={"name"}
                        placeholder="India city"
                        searchPlaceholder="Search..."
                        value={value}
                        onChange={item => {
                            handlerCity(item.id)
                        }}
                        renderLeftIcon={() => (
                            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
                        )}
                        renderItem={item => _renderItem(item)}
                        // // textError="Error"
                        disable={visible}
                    />





                </View>
                {/* <View style={styles.IconEye}> */}
                    <Entypo
                        name={hidePass ? 'eye-with-line' : 'eye'}
                        size={24} color="#009387"
                        style={styles.Icon}
                        onPress={() => setHidePass(!hidePass)}
                    />
                {/* </View> */}
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

