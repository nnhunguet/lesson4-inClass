import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './screens/DashboardScreen';
import Profile from './screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabNavigator(){
  return(
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FF958F',
        inactiveTintColor: '#989898',
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={Dashboard}/>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabStack"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="BottomTabStack" component={BottomTabNavigator} />
        {/* <Stack.Screen name="Detail" component={Detail} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
