import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Card from './Card';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

export default function HeaderFlatlist({ data }){
  return(
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginVertical: 12}}>List of Account</Text>
      <View style={styles.wrapcard}>
        <Card data={data.bank} name="Bank Account" style={styles.card}/>
        <Card data={data.credit} name="Credit card" style={styles.card}/>
        <Card data={data.cash} name="Cash" style={styles.card}/>
      </View>
      <View style={styles.total}>
        <Text style={{color: "#FF958F", fontWeight: "bold", fontSize: 24}}>{formatter.format(parseInt(data.total))}</Text>
        <Text style={{color: "#A6B1C0"}}>Total Balance</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  wrapcard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
  },
  total: {
    marginVertical: 12,
    backgroundColor: "#fff", 
    borderRadius: 10, 
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  }
})