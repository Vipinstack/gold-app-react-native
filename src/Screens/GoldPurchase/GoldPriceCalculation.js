import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React from 'react';
import { styles } from './GoldPrice.style';
import { FontAwesome } from '@expo/vector-icons';

const GoldPriceCalculation = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.amount_Container}>
            <Text style={styles.amount_Titile}>Investment Amount</Text>
            <TextInput placeholder='50,057' keyboardType='number-pad' style={styles.Rup_input}
            
            />
        </View>
        <View style={styles.priceBtn}>
            <TouchableOpacity>
            <Text style={styles.price}>+500</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.price}>+1000</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.price}>+2000</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.price}>+5000</Text>
            </TouchableOpacity>           
        </View>
        <View style={styles.gram_container}>
            <TextInput placeholder='1.2 gr' keyboardType='number-pad'  style={styles.gram_input}/>
        </View>
        <View style={styles.img_container}>
        <Image
                source={require('../../../assets/gold.png')}
                style={styles.imgs}
        />
        <Image
                source={require('../../../assets/gold.png')}
                style={styles.imgs}
        />
        <Image
                source={require('../../../assets/gold.png')}
                style={styles.imgs}
        />
        <Image
                source={require('../../../assets/gold.png')}
                style={styles.imgs}
        />
        <Image
                source={require('../../../assets/gold.png')}
                style={styles.imgs}
        />
        </View>
        <View style={styles.btn_container}>
            <Text style={styles.btn} onPress={()=>navigation.push('toastify')}>BUY NOW</Text>
        </View>
    </View>
  )
}
export default GoldPriceCalculation
