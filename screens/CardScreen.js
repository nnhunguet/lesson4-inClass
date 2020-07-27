import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CardScreen({route}) {
  const {data} = route.params;
  return(
    <FlatList
      style={{backgroundColor: "#F2F4F7"}}
      data={data}
      renderItem={ ({item}) => (
        <View style={styles.container}>
          <View style={{backgroundColor: "#FEC180", padding: 20, borderRadius: "50%"}}>
            <Image source={require('../assets/cart.png')} style={{width: 50, height: 50, resizeMode: "contain",}}/>
          </View>
          <View style={styles.wrapText}>
            <Text>{`You bought ${item.production_name} for $${item.spend_money}`}</Text>
            <Text style={{marginTop: 8, color: "#A6B1C0"}}>08:39 AM</Text>
          </View>
        </View>
      )}
      keyExtractor={item => `${item.id}`}
    >
    </FlatList>
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
    justifyContent: "center",
  },
})