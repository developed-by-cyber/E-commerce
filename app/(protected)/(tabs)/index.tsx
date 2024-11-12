import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Wrapper from "@/components/ui/Wrapper";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  const [value, setValue] = useState('')
   const onChange = (value: string) =>{
    setValue(value)
   }
   const onClear = () =>{
    setValue('')
   }
  return (
    <Wrapper>
      <SearchInput value={value} onChange={onChange}  onClear={onClear}/>
    </Wrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
