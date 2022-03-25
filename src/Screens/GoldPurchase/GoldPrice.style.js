import { StyleSheet } from "react-native";

export 
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:340,
        width:'100%',
        height:200,
    },
    amount_Container:{
        position:"absolute",
    },
    amount_Titile:{
        color:'gray',
        position:"absolute",
        left:120

    },
    Rup_input:{
        position:'absolute',
        top:30,
        left:100,
        width:180,
        height:40,
        textAlign:'center',
        borderBottomWidth:1,
        fontSize:23

    },
    priceBtn:{
        position: 'absolute',
        top:80,
        left:60,
        flex:1,
        flexDirection:'row',
        
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
        position:'absolute',
        top:140,
        left:100,
        width:180,
        height:40,
        textAlign:'center',
        borderBottomWidth:1,
        fontSize:25,
    },
    img_container:{
        position: 'absolute',
        top:250,
        flex:1,
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
        top:328,
        width:'100%',
        height:120,
        backgroundColor:'green',
       
    },
    btn:{
        textAlign:'center',
        color:'#F5F5F5',
        lineHeight:30,
        fontSize:20,
    }

})