import React, { useState } from 'react';
import { Image, Modal, Alert, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import DashboardScreen from '../components/Dashboard';
import DetailScreen from '../screens/DetailScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CardScreen from '../screens/CardScreen';

const Stack = createStackNavigator();

export default function Dashboard({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Stack.Navigator>
        <Stack.Screen 
          name="DashboardScreen" 
          component={DashboardScreen} 
          options={{
            headerTitle: "Dashboard",
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity>
                <Image source={require('../assets/menu.png')} style={{width: 28, height: 28, resizeMode: "center", marginLeft: 6}}/>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
              > 
                <Image source={require('../assets/bell.png')} style={{width: 28, height: 28, resizeMode: "center", marginRight: 6}}/>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
        <Stack.Screen 
          name="DetailScreen" 
          component={DetailScreen} 
          options={({ route }) => ({ title: route.params.title, headerTitleAlign: "center"})}
        />
        <Stack.Screen 
          name="CardScreen" 
          component={CardScreen} 
          options={({ route }) => ({ title: route.params.title, headerTitleAlign: "center" })}
        />
      </Stack.Navigator>
      </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});