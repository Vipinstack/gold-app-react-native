import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 280,
      left: 20,
      width: '100%',
      height: 250,
      backgroundColor: '#ffff',
      borderRadius: 4,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.9,
      shadowRadius: 5,
      elevation: 5,
    },
    price_title: {
      marginHorizontal: 20,
      paddingVertical: 20,
      fontSize: 20,
      fontFamily:'BreeSerif'
      
    },
    today_price: {
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    today_price_name: {
      position: "absolute",
      top: 20,
      left: 20,
      fontSize: 18,
      fontFamily:'BreeSerif'
    },
    today_price_gram: {
      position: "absolute",
      top: 20,
      right: 40,
      fontSize: 18
    },
  
    Latest_Date: {
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    Latest_Date_name: {
      position: "absolute",
      top: 120,
      left: 20,
      fontSize: 18,
      fontFamily:'BreeSerif'
    },
    Latest_Date_gram: {
      position: "absolute",
      top: 120,
      right: 40,
      fontSize: 18
    },
  
    Latest_Date: {
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    yesterday_price_name: {
      position: "absolute",
      top: 70,
      left: 20,
      fontSize: 18,
      fontFamily:'BreeSerif'
    },
    yesterday_price_gram: {
      position: "absolute",
      top: 70,
      right: 40,
      fontSize: 18
    },
    btnContainer: {
      position: 'absolute',
      top: 230,
      backgroundColor: '#F0A500e6',
      width: 160,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    shriRam: {
      fontSize: 30,
      color: 'red'
    },
    NextBtnContainer: {
      position: 'absolute',
      top: 230,
      left: 200,
      backgroundColor: '#F0A500e6',
      width: 160,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    Janta: {
      fontWeight: '700'
    },
  
    ScrollViewbtn:{
      position:'relative',
      top:350,
      height:70
    },
    // gold_holding: {
    //   backgroundColor: '#F0A500e6',
    //   width: 160,
    //   height: 44,
    //   marginLeft: 7,
    //   borderRadius: 50,
    //   zIndex: 0,
    //   shadowColor: '#000',
    //   shadowOffset: { width: 0, height: 1 },
    //   shadowOpacity: 0.8,
    //   shadowRadius: 2,
    //   elevation: 5
    // },
    // today_api_price: {
    //   position: 'absolute',
    //   top: 240,
    //   left: 12,
    //   fontSize: 16,
    //   fontFamily:'BreeSerif',
    //   backgroundColor: '#F0A500e6',
    //   width: 160,
    //   height: 44,
    //   marginLeft: 7,
    //   borderRadius: 50,
    //   zIndex: 0,
    //   shadowColor: '#000',
    //   shadowOffset: { width: 0, height: 1 },
    //   shadowOpacity: 0.8,
    //   shadowRadius: 2,
    //   elevation: 5
    // },
    btns:{
      position: 'relative',
      top:100,
      width:160,
      height:45,
      backgroundColor:'#F0A500e6',
      marginLeft:12,
      borderRadius:50,
      textAlign:'center',
      lineHeight:40,
      fontSize:15

    }
  
  })