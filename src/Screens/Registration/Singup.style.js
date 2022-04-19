import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F5F5F5',
        marginVertical: 240,
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    inputFileds: {
        width: "100%",
        marginHorizontal:15,
        marginTop:12,
    },
    Label: {
        marginHorizontal: 18,
    },
    inputFirst: {
        backgroundColor: '#FFF',
        padding: 5,
        margin: 10,
        marginHorizontal: 18,
        width: '80%',
        borderRadius: 5,
        borderBottomColor:'gray',
        borderBottomWidth:1,
        shadowColor: "#000",
    },
    btnContainer: {
        marginVertical:20,
        marginHorizontal: 34,
        width: "80%",
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
        marginVertical:12,
        textDecorationLine: 'underline',
        fontFamily: 'BreeSerif'
    },

    Icon: {
        position: 'absolute',
        top:154,
        right: 50,
    },
    picker: {
        backgroundColor: 'red',
        marginHorizontal: 15,
        marginVertical: 6,
        height: 40,
        width: '80%',
        borderRadius: 5,
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    dropdown: {
        marginHorizontal: 16,
        marginRight:50,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      item: {
        paddingVertical: 15,
        paddingHorizontal: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 12,
    },
})