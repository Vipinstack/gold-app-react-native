import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const Slider = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.common_div]}>
          <Text style={styles.today_api_price}>1.05 gr</Text>
          <Text style={styles.today_api_price_title}>Gold Holding</Text>
        </View>
        <View style={[styles.common_div, styles.my_wallet]}>
          <Text style={styles.today_api_price}>
            <FontAwesome5 name="rupee-sign" size={24} color="black" /> 40,045
          </Text>
          <Text style={styles.today_api_price_title}>My Wallet</Text>
        </View>
      </View>
    </>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around'
  },
  common_div: {
    backgroundColor: "#FFDC61",
    width: 155,
    height: 100,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    padding: 12,
    paddingTop: 18,
  },
  today_api_price: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25,
  },
  today_api_price_title: {
    fontWeight: "bold",
    textAlign: "right",
    fontSize: 17,
    marginTop: 18,
  },
  my_wallet: {
    backgroundColor: "#9BFC83",
    marginLeft: 10,
  },
});
