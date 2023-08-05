import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CounterScreen from "./CounterScreen";
import LoginScreen from "./LoginScreen";
import Signup from "./Signup";
import { AuthContext, AuthProvider } from "./AuthProvider";
import { Button, View, TextInput, Image, StyleSheet } from "react-native";



const AuthStack = createStackNavigator();

const AuthStackScreens = () =>{
  return(
    <AuthStack.Navigator initialRouteName="SignUp">
      <AuthStack.Screen name="SignUp" component={Signup} options={{headerShown: false}}/>
      <AuthStack.Screen name="SignIn" component={LoginScreen} options={{headerShown: false}}/>
    </AuthStack.Navigator>
  )
}
export default function App() {
  return (
    <AuthProvider>
    <AuthContext.Consumer>
  {(auth)=><NavigationContainer>
    {/* <stack.Navigator> */}
      {/* <stack.Screen name="MAD(A)" component={HomeScreen}/>
      <stack.Screen name="List Of Products" component={ListScreen}/>
      <stack.Screen name="Counter" component={CounterScreen}/>
      <stack.Screen name="SignIn" component={LoginScreen}/> */}
      {auth?.isLoggedIn? <CounterScreen/> : <AuthStackScreens/>}
    {/* </stack.Navigator> */}
  </NavigationContainer>}
  </AuthContext.Consumer>
  </AuthProvider>
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
