import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F5F5F5',
        position: 'absolute',
        top: 180,
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    inputFileds: {
        position: 'absolute',
        width: "100%",
        top: 15,
        left: 12,
        zIndex: 0,
    },
    Label: {
        marginHorizontal: 15,
    },
    inputFirst: {
        backgroundColor: '#FFF',
        padding: 6,
        margin: 15,
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
    },

    btnContainer: {
        position: 'absolute',
        bottom: 280,
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
        top: 16,
        textDecorationLine: 'underline',
        fontFamily: 'BreeSerif'
    },

    IconEye: {
        position: 'absolute',
        top: 169,
        right: 44,
        backgroundColor: '#009387',
        width: '10%',
        height: 40.9,
        borderRadius: 5,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
        zIndex: 1
    },
    Icon: {
        position: 'absolute',
        top: 10,
        right: 8,
    },
    picker: {
        backgroundColor: '#FFF',
        marginHorizontal: 15,
        marginVertical: 6,
        height: 40,
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
    }
})