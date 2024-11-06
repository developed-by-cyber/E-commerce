import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { colors } from "@/constant";

type Props = {
  placeholder: string;
  value: string;
  label: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};
const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  label,
  secureTextEntry
}: Props) => {
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    padding: 10,
    height: 55,
    justifyContent: "center",
  },
  input: {
    borderWidth: 0,
    borderColor: "transparent",
    color: colors.dark,
  },
  label: {
    color: colors.dark,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  }
});
