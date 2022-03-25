import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { styles } from './GoldPrice.style';


const GoldPrice = ({ navigation }) => {

  const [loaded] = useFonts({
    BreeSerif: require('../../../assets/fonts/BreeSerif.ttf')
  })

  if (!loaded) {
    return <Text>Loading..</Text>
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.price_title}>Gold Price</Text>
      <View style={styles.today_price}>
        <Text style={styles.today_price_name}>Today</Text>
        <Text style={styles.today_price_gram}>57,075/Gram</Text>
      </View>
      <View style={styles.yesterday_price}>
        <Text style={styles.yesterday_price_name}>Yesterday</Text>
        <Text style={styles.yesterday_price_gram}>57,075/Gram</Text>
      </View>
      <View style={styles.Latest_Date}>
        <Text style={styles.Latest_Date_name}>{new Date().toLocaleDateString()}</Text>
        <Text style={styles.Latest_Date_gram}>57,075/Gram</Text>
      </View>

      {/* <View style={styles.ScrollViewbtn}> */}
        {/* <ScrollView
          horizontal={true}
        > */}
          {/* <View style={[styles.gold_holding]}> */}
            {/* <Text style={styles.today_api_price} onPress={() => navigation.push('Gold Purchase')}>Shri Ram Jwellers</Text> */}
          {/* </View> */}
        {/* </ScrollView> */}
      {/* </View> */}

    </View>
      <ScrollView style={styles.ScrollViewbtn}
        horizontal={true}
      >
        <Text style={styles.btns} onPress={()=>{navigation.push('Gold Purchase')}}>Shri Ram Jwellers</Text>
        <Text style={styles.btns}>Shri Ram Jwellers</Text>
        <Text style={styles.btns}>Shri Ram Jwellers</Text>
        <Text style={styles.btns}>Shri Ram Jwellers</Text>
        <Text style={styles.btns}>Shri Ram Jwellers</Text>
        <Text style={styles.btns}>Shri Ram Jwellers</Text>
      </ScrollView>
      </>

  )
}

export default GoldPrice


