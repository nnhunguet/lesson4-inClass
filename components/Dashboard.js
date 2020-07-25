import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import HeaderFlatlist from '../components/HeaderFlatlist';
import Category from './Category';

const DATA = require('../data.json');

export default function Dashboard({navigation}) {
  const data = DATA.detail;
  const dataCategory = [
    {
      id: 1,
      category: 1,
      spend_money: data.filter(item => item.category === 1).reduce( (acc, cur)  => {
        return acc + cur.spend_money;
      }, 0),
      date_time: data.filter(item => item.category === 1).map(ele => ele.date_time).sort(function(a,b){
        return  Number(new Date(b).getTime() - new Date(a).getTime() );
      })[0]
    },
    {
      id: 2,
      category: 2,
      spend_money: data.filter(item => item.category === 2).reduce( (acc, cur)  => {
        return acc + cur.spend_money;
      }, 0),
      date_time: data.filter(item => item.category === 2).map(ele => ele.date_time).sort(function(a,b){
        return  Number(new Date(b).getTime() - new Date(a).getTime() );
      })[0],
    },
    {
      id: 3,
      category: 3,
      spend_money: data.filter(item => item.category === 3).reduce( (acc, cur)  => {
        return acc + cur.spend_money;
      }, 0),
      date_time: data.filter(item => item.category === 3).map(ele => ele.date_time).sort(function(a,b){
        return  Number(new Date(b).getTime() - new Date(a).getTime() );
      })[0],
    }
  ]
  return(
    <FlatList
      ListHeaderComponent={<HeaderFlatlist data={DATA} navigation={navigation}/>}
      style={{backgroundColor: "#F2F4F7"}}
      data={dataCategory}
      renderItem={ ({item}) => <Category item={item} navigation={navigation} data={data}/>}
      keyExtractor={item => `${item.id}`}
    >
    </FlatList>
  )
}