import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 
function ContactsScreen(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contacts Screen</Text>
    </View>
  )
}

export default function Contacts() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="ContactsScreen" 
          component={ContactsScreen} 
          options={{
            title: 'Contacts',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: "center",
          }}
        />
    </Stack.Navigator>
  );
}