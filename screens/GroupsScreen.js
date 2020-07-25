import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 
function GroupsScreen(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Groups Screen</Text>
    </View>
  )
}

export default function Groups() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="GroupsScreen" 
          component={GroupsScreen} 
          options={{
            title: 'Groups',
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