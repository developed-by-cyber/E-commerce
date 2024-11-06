import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "../ui/CustomButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleSubmit = () =>{
    console.log({email, password})
  }
  const disabled = email.trim() === "" || password.trim() === "";
  return (
    <View style={styles.container}>
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={handleEmailChange}
        value={email}
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        keyboardType="email-address"
        onChangeText={handlePasswordChange}
        value={password}
        secureTextEntry
      />
      <CustomButton disabled={disabled} buttonTitle="Submit" onPress={handleSubmit}/>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
  },
});
