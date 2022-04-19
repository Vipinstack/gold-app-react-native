import { Text, View, ScrollView, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { styles } from "./GoldPrice.style";
import { url } from "../../Api/api";
import { useIsFocused } from "@react-navigation/native";

const GoldPrice = ({ navigation }) => {
  const [todayprice, setTodayPrice] = useState([]);
  const [sellers, setSellers] = useState([]);
  // const isFocused = useIsFocused(); //navigation by


  console.log(todayprice)

  useEffect(() => {
    SellersApi();
    GoldPriceApi();
  }, []);

  const GoldPriceApi = async () => {
    await fetch(`${url}/commodities`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTodayPrice(data.data);
      });
  };

  const SellersApi = async () => {
    await fetch(`${url}/get_seller`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((sellersData) => {
        setSellers(sellersData.data);

      });
  };



  const [loaded] = useFonts({
    BreeSerif: require("../../../assets/fonts/BreeSerif.ttf"),
  });

  if (!loaded) {
    return <Text>Loading..</Text>;
  }

  const handlerToast = (e) => {
    ToastAndroid.showWithGravityAndOffset(
      `Your Gold Purchase sellers ${e}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <>
      <View style={styles.wapper}>
        <Text style={styles.gold_price}>Gold Price</Text>
        {todayprice.map((e, i) => {
           return (
            <View style={styles.container} key={i}>
              <Text style={styles.ApiFetch_date}>{e.date}</Text>
              <Text style={styles.ApiFetch_price}>
                {e.price}/{e.unit}
              </Text>
            </View>
           ); 
         })} 
      </View>


      <View style={styles.ScrollViewbtn}>
        <ScrollView horizontal={true}>
          {sellers.map((e, i) => {
            return (
              <Text
                style={styles.btns}
                key={i}
                onPress={() =>
                  navigation.navigate(
                    "Gold Purchase",
                    {
                      price: todayprice,
                      name: e.business_name,
                      sellers_id: e.id,
                    },
                    handlerToast(e.business_name)
                  )
                }
              >
                {e.business_name}
              </Text>
            );
          })}
        </ScrollView>
      </View>

      <Text
        onPress={() => navigation.push("edit_profile")}
        style={{
          marginBottom: 140,
          marginHorizontal: 30,
        }}
      >
        EditProfile
      </Text>
    </>
  );
};

export default GoldPrice;
