import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { url } from "../../Api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";

const Edit_Profile = ({ navigation }) => {
  const [country, setCountry] = useState(3);
  const [state, setState] = useState([]);
  const [stateId, setStateId] = useState();
  const [cityId, setCityId] = useState();
  const [city, setCity] = useState([]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [adress, setAdress] = useState("");
  const [value, setValue] = useState([]);
  const [visible, setvisible] = useState(true);
  const [customerId, setCustomerId] = useState("");
  const [tokenvalue, setTokenValue] = useState("");

  const isFocused = useIsFocused();

  const getState = async () => {
    const resp = await fetch(`${url}/get_states/101`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setState(data);
      });
  };

  const getCity = async (e) => {
    const res = await fetch(`${url}/get_cities/${e}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setCity(result);
      });
  };

  const _renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.name}</Text>
      </View>
    );
  };

  const handlerCountry = (e) => {
    setState(country);
  };
  const handlerState = (e) => {
    setStateId(e);
    setvisible(false);
    getCity(e);
  };
  const handlerCity = (e) => {
    setCityId(e);
  };

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("ACCESS_TOKEN");
      const Getdata = JSON.parse(value);
      setCustomerId(Getdata.data.id);
      setTokenValue(Getdata.token);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(tokenvalue + "token value in web profile");
  console.log(customerId + "customer id");
  console.log(name + "user name get");
  console.log(mobile + "user mobile get");
  console.log(adress + "user adress get");

  const GoldPriceApi = async () => {
    await fetch(`${url}/edit_user/${customerId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${tokenvalue}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.data[0].name);
        setMobile(data.data[0].mobile);
        setAdress(data.data[0].address);
      })
      .catch((e) => {
        console.log(e, "Error inside api fetch gold price");
      });
  };

  useEffect(() => {
    GoldPriceApi();
    getToken();
    getState();
  }, [isFocused]);

  return (
    <>
      <Animatable.View style={styles.container} animation="fadeInUpBig">
        <TextInput
          placeholder="Eg. Name"
          style={styles.inputFirst}
          value={name}
        />
        <TextInput
          placeholder="Eg. Mobile"
          style={styles.inputFirst}
          value={mobile}
        />
        <TextInput
          placeholder="Eg. Address"
          style={styles.inputFirst}
          value={adress}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          containerStyle={styles.shadow}
          iconStyle={styles.iconStyle}
          data={state}
          search
          maxHeight={400}
          labelField={"name"}
          valueField={"name"}
          placeholder="India (Default)"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            // setValue(item.id);
            handlerCountry(item.id);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
          renderItem={(item) => _renderItem(item)}
          // // textError="Error"
          disable={true}
        />

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          containerStyle={styles.shadow}
          iconStyle={styles.iconStyle}
          data={state}
          search
          maxHeight={400}
          labelField={"name"}
          valueField={"name"}
          placeholder="India state"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            handlerState(item.id);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
          renderItem={(item) => _renderItem(item)}
          // // textError="Error"
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          containerStyle={styles.shadow}
          iconStyle={styles.iconStyle}
          data={city}
          search
          maxHeight={400}
          labelField={"name"}
          valueField={"name"}
          placeholder="India city"
          searchPlaceholder="Search..."
          value={value}
          onChange={(item) => {
            handlerCity(item.id);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
          renderItem={(item) => _renderItem(item)}
          // // textError="Error"
          disable={visible}
        />

        <Text style={styles.btn}>Update Password</Text>

        <Text
          style={{ marginTop: 23, marginHorizontal: 30}}
          onPress={() => {
            navigation.navigate("logout");
          }}
        >
          LogOut
        </Text>
        <Text
          style={{ marginTop: 23, marginHorizontal: 30 }}
          onPress={() => {
            navigation.navigate("update_password");
          }}
        >
          Update Password
        </Text>
      </Animatable.View>
    </>
  );
};

export default Edit_Profile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: "100%",
  },
  inputFirst: {
    backgroundColor: "#FFF",
    padding: 5,
    margin: 10,
    marginHorizontal: 30,
    width: "80%",
    borderRadius: 5,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    shadowColor: "#000",
  },
  btn: {
    marginTop: 30,
    padding: 5,
    backgroundColor: "#00BA00",
    borderRadius: 8,
    textAlign: "center",
    lineHeight: 30,
    color: "white",
    fontWeight: "bold",
    width: "80%",
    marginHorizontal: 30,
  },
  dropdown: {
    marginHorizontal: 30,
    marginRight: 50,
    width: "80%",
    height: 50,
    borderBottomColor: "gray",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 12,
  },
});
