import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wapper:{
    backgroundColor: "#fff",
    borderRadius:5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 40,
  },
  container: {
    paddingTop: 13,
    paddingEnd:30,
    paddingBottom:20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 4,
    
  },
  ApiFetch_date: {
    fontSize: 20,
  },
  ApiFetch_price: {
    fontSize: 20,
  },
  ScrollViewbtn: {
    marginTop: 80,
    flex: 1,
  },
  btns: {
    width: 160,
    height: 45,
    backgroundColor: "#FFDC61",
    marginLeft: 12,
    borderRadius: 50,
    textAlign: "center",
    lineHeight: 40,
    fontSize: 15,
  },
  gold_price:{
    backgroundColor:'#9BFC83',
    padding:10,
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
  },
});


