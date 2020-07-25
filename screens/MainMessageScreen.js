import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 


export default function MainMessageScreen() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="MainMessageScreen" 
          component={MainMessage} 
          options={{
            title: 'Main Message',
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