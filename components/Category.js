import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const moment = require('moment');

const BACKGROUND_GROCERIES = "#FEC180";
const BACKGROUND_CLOTHES = "#EFBAD3";
const BACKGROUND_RENTAL = "#51EFDE";

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

function choiceImage(type){
  return parseInt(type) === 1 ? require('../assets/cart.png') : parseInt(type) === 2 ? require('../assets/clothes.png') : require('../assets/home.png'); 
}

function choiceBackground(type){
  return parseInt(type) === 1 ? BACKGROUND_GROCERIES : parseInt(type) === 2 ? BACKGROUND_CLOTHES : BACKGROUND_RENTAL;
}

function choiceName(type) {
  return parseInt(type) === 1 ? "Groceries" : parseInt(type) === 2 ? "Clothes" : "Rental";
}

function choiceColorCurrency(type) {
  return parseInt(type) === 1 ? "#FF958F" : parseInt(type) === 2 ? "#A254F2" : "#51EFDE";
}

export default function Category({item, navigation, data}) {
  let curCategory = item.category;
  let filterData = data.filter(item => item.category === curCategory)
  let date = new Date(item.date_time);
  return(
    <TouchableOpacity style={styles.container}
      onPress={() =>
        navigation.push('DetailScreen', {
          title: choiceName(item.category),
          category: item.category,
          data: filterData
        })
      }
    > 
      <View style={{ backgroundColor: choiceBackground(item.category), borderRadius: 10, padding: 20,}}>
        <Image source={choiceImage(item.category)} style={{width: 30, height: 30, resizeMode: "contain",}}/>
      </View>
      <View style={styles.wrapText}>
        <View style={styles.textItem}>
          <Text style={{fontSize: 24, fontWeight: "500"}}>{choiceName(item.category)}</Text>
          <Text style={{color: "#A6B1C0"}}>{moment(date).fromNow()}</Text>
        </View>
        <View style={styles.textItem}>
          <Text style={{color: "#A6B1C0"}}>Credit card</Text>
          <Text style={{color: choiceColorCurrency(item.category)}}>{formatter.format(parseInt(item.spend_money))}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: "#fff",
    marginVertical: 8,
    flexDirection: "row",
    padding: 8,
    borderRadius: 16,
  },
  wrapText: {
    flex: 1,
    marginHorizontal: 8,
  },
  textItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})