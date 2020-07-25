import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import HeaderFlatlist from '../components/HeaderFlatlist';
import Category from './Category';

const DATA = require('../data.json');

export default function Dashboard({navigation}) {
  const data = DATA.detail;
  return(
    <FlatList
      ListHeaderComponent={<HeaderFlatlist data={DATA.account_information}/>}
      style={{backgroundColor: "#F2F4F7"}}
      data={data}
      renderItem={ ({item}) => <Category item={item} navigation={navigation}/>}
      keyExtractor={item => `${item.id}`}
    >
    </FlatList>
  )
}