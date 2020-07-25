import * as React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuOutlined } from '@ant-design/icons'

import Message from '../components/Message';
import { TouchableOpacity } from 'react-native-gesture-handler';

function MainMessage({ navigation, route }){
  const {author, text, image} = route.params;
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{uri: image}} style={{height: 100, width: 100, resizeMode: "cover"}}/>
      <Text>{author}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const Stack = createStackNavigator(); 
function MessagesScreen({ navigation }){
  return(
    <ScrollView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('MainMessageScreen', {
          author: 1,
          text: 2,
          image: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/p160x160/66028072_2360942504181428_6238851141774344192_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=PMpMSIgbFxwAX9DSq4a&_nc_ht=scontent.fhan2-4.fna&_nc_tp=6&oh=38a1c8cbc25d7e5e3a842d580b382d09&oe=5F3C20A5",
        })}>
          <Message/>
        </TouchableOpacity>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </View>
    </ScrollView>
  )
}

export default function Messages({navigation}) {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="MessagesScreen" 
          component={MessagesScreen} 
          options={{
            title: 'Messages',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: "center",
            headerLeft: props => <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <MenuOutlined style={{color: "black", marginLeft: 12,}}/>
            </TouchableOpacity>,
          }}
        />
        <Stack.Screen
          name="MainMessageScreen"
          component={MainMessage}
        />
    </Stack.Navigator>
  );
}