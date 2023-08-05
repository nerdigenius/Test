import React, { useState } from "react";
import { Button, View, TextInput, Image, StyleSheet,Text } from "react-native";
// import UIULogo from "../../assets/public/icons/uiu_logo.png";
import Logo from "./assets/public/icons/icon.png";
import { AuthContext, IAuthProvider } from "./AuthProvider";
import LoginScreen from "./LoginScreen";

const SignupScreen = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");

  const match = {
    email: "test@gmail.com",
    password: "abcd1234",
  };

  const handleOnLoginSubmit =()=>{
          props.navigation.navigate("SignIn");
  }

  const handleOnSubmit = (authData: IAuthProvider) => {
    if (email === match["email"] && password === match["password"]) {
      console.log("SUCCESSFULL");
      authData.setIsLoggedIn(true);
      // props.navigation.navigate("Counter")
    } else {
      console.log("FAILED");
    }
  };

  const handleEmailInput = (emailInput: string) => {
    // console.log(emailInput)
    setEmail(emailInput);
  };
const handleOnUsernameInput =(userInput:string)=>{
          setuserName(userInput)
}
  const handlePassInput = (passInput: string) => {
    // console.log(passInput)
    setPassword(passInput);
  };
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.mainContainer}>
          <Image source={Logo} style={styles.imageStyles} />
          <View style={styles.inputContainer}>
          <TextInput
              value={password}
              onChangeText={handleOnUsernameInput}
              style={styles.inputStyles}
              placeholder="Username"
            />
            <TextInput
              value={email}
              onChangeText={handleEmailInput}
              style={styles.inputStyles}
              placeholder="Email"
            />
            <TextInput
              value={password}
              onChangeText={handlePassInput}
              style={styles.inputStyles}
              placeholder="Password"
            />
            
            
          </View>
          <View>
            <Button
              title="SIGNUP"
              onPress={() => handleOnSubmit(auth as IAuthProvider)}
            />
            <Text>Already Signed up?</Text>
            <Button title="Login" onPress={()=>handleOnLoginSubmit()}></Button>
          </View>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height:"100%"
  },
  imageStyles: {
    height: 100,
    width: 100,
    margin: 40,
  },
  inputContainer: {
    display: "flex",
    margin: 10,
  },
  inputStyles: {
    width: 200,
    height: 60,
    marginTop: 20,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 25,
  },
});
export default SignupScreen;
