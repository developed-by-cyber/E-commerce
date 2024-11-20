import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { colors } from "@/constant";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

type Props = {
  placeholder: string;
  value: string;
  label?: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  error?: string;
  password?: boolean;
  toggleSecure?: () => void;
  style?: StyleProp<ViewStyle>;
};
const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  label,
  secureTextEntry,
  error,
  password,
  toggleSecure,
  style,
}: Props) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container, style]}>
        <TextInput
          placeholderTextColor="#ccc"
          style={styles.input}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />
        {password && (
          <TouchableOpacity onPress={toggleSecure}>
            {secureTextEntry ? (
              <AntDesign name="eye" size={20} />
            ) : (
              <FontAwesome name="eye-slash" size={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
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
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderWidth: 0,
    borderColor: "transparent",
    color: colors.dark,
    flex: 1,
  },
  label: {
    color: colors.dark,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  error: {
    color: "red",
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
  },
});
