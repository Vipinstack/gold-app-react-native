import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';


const Toastify = ({ navigation }) => {
    return (
        <Animatable.View style={styles.container}
            animation="bounceInUp"
        >
            <Text style={styles.title}>Thank You !</Text>
            <View style={styles.successful}>
                <Image
                    source={require('../../../../assets/success.png')}
                    style={styles.imgs}
                />
                <Text style={styles.success_Titile}>Have You Successfully Purchased</Text>
            </View>
            <View style={styles.bts}>
                <Text style={styles.btn_continue} onPress={() => navigation.push('home')}>Continue</Text>
                <Text style={styles.btn_back} onPress={() => navigation.goBack()}>Back</Text>
            </View>
        </Animatable.View>
    )
}

export default Toastify

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginRight: 20,
        marginVertical: 150,
        height: 550,
        backgroundColor: '#ffff',
        borderColor: '#F5F5F5',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 3
    },
    title: {
        position: 'absolute',
        left: 70,
        top: 20,
        fontSize: 30,
        fontFamily: 'Roboto'
    },
    successful: {
        marginHorizontal: 30,
        marginRight: 30,
        marginVertical: 150,
        height: 190,
        backgroundColor: '#ffff',
        borderColor: '#F5F5F5',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 2
    },
    imgs: {
        position: 'absolute',
        top: 29,
        left: 80,
        width: 80,
        height: 80,
    },
    success_Titile: {
        position: 'absolute',
        bottom: 31,
        left: 16,
        fontSize: 15
    },
    bts: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 40,
    },
    btn_continue: {
        width: 100,
        height: 45,
        marginLeft: 6,
        backgroundColor: 'gray',
        borderRadius: 50,
        textAlign: 'center',
        lineHeight: 40
    },
    btn_back: {
        width: 100,
        height: 45,
        marginLeft: 15,
        backgroundColor: '#FEBC11',
        borderRadius: 50,
        textAlign: 'center',
        lineHeight: 40
    }
})
