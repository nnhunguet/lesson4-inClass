import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BANK_COLOR = "#E437BC";
const CREDIT_COLOR ="#EFA75A";
const CASH_COLOR = "#23E3D6";

function choiceColor(type) {
  return parseInt(type) === 1 ? BANK_COLOR : parseInt(type) === 2 ? CREDIT_COLOR : CASH_COLOR;
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

export default function Card({data, name, dataFiltered, navigation}){
  return(
    <TouchableOpacity 
      style={{backgroundColor: choiceColor(data.type), borderRadius: 10, padding: 16}}
      onPress={() => navigation.navigate('CardScreen', {
        title: name,
        data: dataFiltered
      })}  
    >
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{formatter.format(parseInt(data.total))}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "500",
  }
})

