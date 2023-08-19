import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListScreen from "./ListScreen";
import LoginScreen from "./LoginScreen";
import Signup from "./Signup";
import { AuthContext, AuthProvider } from "./AuthProvider";
import { Button, View, TextInput, Image, StyleSheet } from "react-native";





export default function App() {
  return (
    <NavigationContainer>
   
       <ListScreen/> 
    
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
