import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator(); 
function TimelineScreen(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Time Screen</Text>
    </View>
  )
}

export default function Timeline() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="Timeline" 
          component={TimelineScreen} 
          options={{
            title: 'Timeline',
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