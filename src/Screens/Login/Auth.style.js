import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        position: 'absolute',
        top: 240,
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    inputFileds: {
        position: 'absolute',
        width: "100%",
        top: 30,
        left: 12,
        zIndex: 0,
    },
    Label: {
        marginHorizontal: 18,
        fontFamily: 'BreeSerif'
    },
    inputFirst: {
        backgroundColor: '#FFF',
        padding: 8,
        margin: 17,
        width: '80%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        // zIndex:0
    },
    btnContainer: {
        position: 'absolute',
        top: 260,
        marginHorizontal: 30,
        width: "80%",

    },
    btn: {
        color: "red"
    },
    btnText: {
        width: '100%',
        backgroundColor: '#009387',
        color: '#F5F5F5',
        fontSize: 23,
        height: 39,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        textAlign: 'center',
        fontFamily: 'BreeSerif'
    },
    signup: {
        position: 'absolute',
        top: 20,
        textDecorationLine: 'underline',
        fontFamily: 'BreeSerif'
    },
    forgetPass: {
        position: 'absolute',
        top: 190,
        left: 18,
        color: 'blue',
        textDecorationLine: 'underline',
        fontFamily: 'BreeSerif'
    },
    IconEye: {
        position: 'absolute',
        top: 163,
        right: 42,
        backgroundColor: '#009387',
        width: '11%',
        height: 45,
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        zIndex: 1
    },
    Icon: {
        position: 'absolute',
        top: 10,
        right: 8,
    }


})