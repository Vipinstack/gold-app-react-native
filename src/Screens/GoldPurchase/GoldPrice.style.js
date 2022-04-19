import { StyleSheet } from "react-native";

export 
const styles = StyleSheet.create({
    container:{
        marginTop:140,
        width:'100%',
        height:400,
    },
    amount_Container:{
        flex:1
    },
    amount_Titile:{
        color:'gray',
        textAlign:'center'
    },
    Rup_input:{
        marginHorizontal:95,
        width:180,
        height:40,
        textAlign:'center',
        borderBottomWidth:1,
        fontSize:23

    },
    priceBtn:{
        paddingTop:10,
        flexDirection:'row',
        alignContent:'center',
        justifyContent: 'center',
        
    },
    price:{
        marginLeft:12,
        textAlign:'center',
        borderWidth:1,
        borderRadius:5,
        width:50,
        height:25,
        backgroundColor: '#ffff',
        borderColor:'#F5F5F5',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 5,
        elevation: 5     
   
    },
    gram_input:{
        marginTop:15,
        marginHorizontal:95,
        width:180,
        height:40,
        textAlign:'center',
        borderBottomWidth:1,
        fontSize:25,
    },
    img_container:{
        paddingVertical:80,
        flexDirection:'row',
        opacity:.5,        
    },
    imgs:{
        width:60,
        height:60,
        marginLeft:10
    },
    btn_container:{
        position:'absolute',
        top:345,
        width:'100%',
        height:40,
        backgroundColor:'#08D95B',
       
    },
    btn:{
        textAlign:'center',
        color:'#F5F5F5',
        lineHeight:30,
        fontSize:20,
    }

})