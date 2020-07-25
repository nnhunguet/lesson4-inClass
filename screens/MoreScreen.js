import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 
function MoreScreen(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More Screen</Text>
    </View>
  )
}

export default function More() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="More" 
          component={MoreScreen} 
          options={{
            title: 'More',
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