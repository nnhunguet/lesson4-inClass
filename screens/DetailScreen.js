import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
const moment = require('moment');
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})
export default function DetailScreen({route}){
  const {data} = route.params;
  return(
    <View> 
      <FlatList
        data={data}
        renderItem={ ({item}) => (
          <View style={styles.container}>
            <View>
              <Image source={{uri: item.production_image}} style={{width: 130, height: 150, resizeMode: "cover",}}/>
            </View>
            <View style={styles.wrapText}>
              <View style={styles.textItem}>
                <Text style={{fontSize: 24, fontWeight: "500"}}>{item.production_name}</Text>
                <Text style={{color: "#A6B1C0"}}>{moment(item.date_time).fromNow()}</Text>
              </View>
              <View style={styles.textItem}>
                <Text style={{color: "#A6B1C0"}}>Credit card</Text>
                <Text>{formatter.format(parseInt(item.spend_money))}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={item => `${item.id}`}
      >
      </FlatList>
    </View>
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
    justifyContent: "space-between",
    alignItems: "center"
  }
})