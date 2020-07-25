import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ProfileScreen(){
  return(
    <View style={styles.container}> 
      <Text>Profile</Text>
    </View>
  )
}

export default function Profile() {
  return (
      <Stack.Navigator>
        <Stack.Screen 
          name="ProfileScreen" 
          component={ProfileScreen} 
          options={{
            headerTitle: "Profile",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})