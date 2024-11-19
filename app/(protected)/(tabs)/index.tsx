import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Wrapper from "@/components/ui/Wrapper";
import SearchInput from "@/components/SearchInput";
import { useGetAllProducts } from "@/libs/tanstack/queries";
import ErrorComponent from "@/components/ui/ErrorComponent";
import Loading from "@/components/ui/Loading";
import Product from "@/components/Product";

const Home = () => {
  const [value, setValue] = useState("");
  const { data, refetch, isError, isPending } = useGetAllProducts();
  const onChange = (value: string) => {
    setValue(value);
  };
  const onClear = () => {
    setValue("");
  };
  if (isError) {
    return <ErrorComponent onRefetch={refetch} />;
  }
  if (isPending) return <Loading />;
  return (
    <Wrapper>
      <SearchInput value={value} onChange={onChange} onClear={onClear} />
      <Product data={data.products} />
    </Wrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
