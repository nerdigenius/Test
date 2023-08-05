import React, { useState } from "react";
import { Button, View, TextInput, Image, StyleSheet } from "react-native";
// import UIULogo from "../../assets/public/icons/uiu_logo.png";
import Logo from "../../assets/public/icons/uiu_logo.png";
import { AuthContext, IAuthProvider } from "../providers/AuthProvider";


export default function App() {
  return (
   <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.mainContainer}>
          <Image source={Logo} style={styles.imageStyles} />
          <View style={styles.inputContainer}>
            <TextInput
              value={email}
              onChangeText={handleEmailInput}
              style={styles.inputStyles}
            />
            <TextInput
              value={password}
              onChangeText={handlePassInput}
              style={styles.inputStyles}
            />
          </View>
          <View>
            <Button
              title="Submit"
              onPress={() => handleOnSubmit(auth as IAuthProvider)}
            />
          </View>
        </View>
      )}
    </AuthContext.Consumer>
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
