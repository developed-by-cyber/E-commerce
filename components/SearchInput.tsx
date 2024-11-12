import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "./form/CustomInput";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/constant";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

const SearchInput = ({ value, onChange, onClear }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={({pressed}) => [{opacity: pressed? 0.5 : 1}]}>
        <AntDesign name="search1" color={colors.dark} size={25} />
      </Pressable>
      <CustomInput
        value={value}
        onChangeText={onChange}
        placeholder="Search by name"
        style={{ borderWidth: 0, flex: 1 }}
      />
      <Pressable
        onPress={onClear}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      >
        {value && <AntDesign name="close" color={colors.dark} size={20} />}
      </Pressable>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 60,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
