import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./GoldPrice.style";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GoldPriceCalculation = ({ navigation }) => {
  const [rupee, setRupee] = useState();
  const [gram, setGram] = useState();
  const [rupee_gram, setRupee_gram] = useState("");
  const [gram_rupee, setGram_Rupee] = useState("");
  const [btnvalue, setBtnValue] = useState();
  const [token, setToken] = useState("");
  const [customer_id, setCustomer_id] = useState("");

  const route = useRoute();
  const TodayPrice = route.params.price; // route get Array in Price Api Respose..
  const sellers_Id = route.params.sellers_id; // sellers_id

  const filteredDate = new Date(
    Math.max(...TodayPrice.map((e) => new Date(e.date)))
  ); //filter date in array

  const filteredPrice = TodayPrice.filter((data) => {
    return (
      data.date == filteredDate.toISOString().split("T")[0] //filter date and check and match show object
    );
  });

  const priceget = filteredPrice.map((e) => e.price); //get price on object
  const commodities_id = filteredPrice.map((e) => e.commodity_id); //get price on object



  // console.log(filteredDate);
  console.log(route.params.price);
  // console.log(commodities_id + "commoditi_id");
  // console.log(sellers_Id + "seller_id");
  // console.log(customer_id + "customer_id");
  // console.log(rupee_gram + "Gram");
  // console.log(gram_rupee + "Rupee");


  const handlerRupee = (e) => {
    const unit_1gram = priceget / 10.0;
    const gram = e / unit_1gram;
    setRupee_gram(gram);
  };

  const handlderGram = (e) => {
    const unit_1gram = priceget / 10.0;
    const price = e * unit_1gram;
    setGram_Rupee(price);
  };

  const handleAddMoney = (money) => {
    setBtnValue(money);
  };

  const GoldPriceData = async (e) => {
    if (
      rupee != "" &&
      gram != "" &&
      sellers_Id != "" &&
      commodities_id != "" &&
      customer_id != ""
    ) {
      await fetch(`${url}/purchase_order`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          customer_id: customer_id,
          seller_id: sellers_Id,
          commodity_id: commodities_id,
          price: rupee_gram,
          weight: gram_rupee,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === 200) {
            navigation.navigate("toastify");
          } else {
            ToastAndroid.showWithGravityAndOffset(
              `${data.message}`,
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              100,
              200
            );
          }
        });
    } else {
      ToastAndroid.showWithGravityAndOffset(
        `Please fill All Filed data !!`,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        100,
        200
      );
    }
  };

  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem("ACCESS_TOKEN");
      const Getdata = JSON.parse(value);
      setCustomer_id(Getdata.data.id);
      setToken(Getdata.token);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>{rupee_gram + "gram"}</Text>
      <Text>{gram_rupee + "Price"}</Text>
      <View style={styles.amount_Container}>
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
          <Text style={styles.amount_Titile}>Investment Amount</Text>
          <TextInput
            placeholder="50,057"
            keyboardType="number-pad"
            style={styles.Rup_input}
            value={rupee}
            onChangeText={handlerRupee}
          />

          <View style={styles.priceBtn}>
            <TouchableOpacity>
              <Text style={styles.price} onPress={() => handleAddMoney(500)}>
                +500
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.price} onPress={() => handleAddMoney(1000)}>
                +1000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.price} onPress={() => handleAddMoney(2000)}>
                +2000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.price} onPress={() => handleAddMoney(5000)}>
                +5000
              </Text>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="1.2 gr"
            keyboardType="number-pad"
            style={styles.gram_input}
            value={gram || rupee_gram}
            onChangeText={handlderGram}
          />
          <Text> </Text>
          <Text> </Text>
        </ScrollView>
      </View>

      <View style={styles.img_container}>
        <Image
          source={require("../../../assets/gold.png")}
          style={styles.imgs}
        />
        <Image
          source={require("../../../assets/gold.png")}
          style={styles.imgs}
        />
        <Image
          source={require("../../../assets/gold.png")}
          style={styles.imgs}
        />
        <Image
          source={require("../../../assets/gold.png")}
          style={styles.imgs}
        />
        <Image
          source={require("../../../assets/gold.png")}
          style={styles.imgs}
        />
      </View>

      <View style={styles.btn_container}>
        <Text style={styles.btn} onPress={GoldPriceData}>
          BUY NOW
        </Text>
      </View>
    </View>
  );
};
export default GoldPriceCalculation;
