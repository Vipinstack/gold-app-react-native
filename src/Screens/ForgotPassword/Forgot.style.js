import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#009387',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        flex:1,
        width: "100%",
    },
    inputFileds: {
        width: "100%",
        marginHorizontal:17,
        marginVertical:20

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
        marginVertical:18,
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