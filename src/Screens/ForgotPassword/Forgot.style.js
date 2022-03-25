import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#009387',
        position: 'absolute',
        top: 370,
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    inputFileds: {
        position: 'absolute',
        width: "100%",
        top: 90,
        left: 12,
        zIndex: 0,
    },
    Label: {
        marginHorizontal: 18,
        color: '#fff',
        fontFamily:'BreeSerif'
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
    },
    btnContainer: {
        position: 'absolute',
        top: 220,
        marginHorizontal: 30,
        width: "80%",

    },

    btnText: {
        width: '100%',
        backgroundColor: '#F5F5F5',
        color: 'black',
        fontSize: 23,
        height: 39,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        textAlign: 'center',
        fontFamily:'BreeSerif'
    },


})