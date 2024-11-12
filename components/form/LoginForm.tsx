import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "../ui/CustomButton";
import { validateEmail, validatePassword } from "@/utils";
import { Href, Link } from "expo-router";

const LoginForm = ({ Register }: { Register?: boolean }) => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const toggleSecure = () => setSecure((prev) => !prev);
  const { name, email, password } = value;
  const handleChange = (inputName: string, text: string) => {
    setValue((prev) => ({ ...prev, [inputName]: text }));
  };
  const handleSubmit = () => {
    if (Register && name.trim() === "") {
      setErrorName("Please enter a name");
      return;
    }
    if (!validateEmail(email)) {
      setErrorEmail("Please enter a valid email");
      return;
    }

    if (!validatePassword(password)) {
      setErrorPassword(
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return;
    }

    setErrorEmail("");
    setErrorPassword("");
    setValue({
      name: "",
      email: "",
      password: "",
    });
  };

  console.log({ name, email, password });
  const disabled = email.trim() === "" || password.trim() === "";
  const buttonText = Register ? "Sign Up" : "Sign In";
  const accountText = Register
    ? "Already have an account?"
    : "Don't have an account?";
  const actionText = Register ? "Sign In" : "Sign Up";
  const href: Href<string | object> = Register ? "/login" : "/register";
  return (
    <View style={styles.container}>
      {Register && (
        <CustomInput
          label="Full Name"
          placeholder="Enter your full name"
          keyboardType="default"
          onChangeText={(text) => handleChange("name", text)}
          value={name}
          error={errorName}
        />
      )}
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={(text) => handleChange("email", text)}
        value={email}
        error={errorEmail}
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        keyboardType="email-address"
        onChangeText={(text) => handleChange("password", text)}
        value={password}
        secureTextEntry={secure}
        toggleSecure={toggleSecure}
        error={errorPassword}
        password
      />
      <CustomButton
        disabled={disabled}
        buttonTitle={buttonText}
        onPress={handleSubmit}
      />
      <Text style={styles.account}>
        {accountText}{" "}
        <Link href={href} asChild>
          <Text style={styles.register}>{actionText}</Text>
        </Link>
      </Text>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    gap: 15,
    marginTop: 20,
  },
  register: {
    color: "blue",
  },
  account: {
    marginTop: 10,
    textAlign: "center",
  },
});
