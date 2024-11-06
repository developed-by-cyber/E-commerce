import LoginForm from "@/components/form/LoginForm";
import Title from "@/components/ui/Title";
import Wrapper from "@/components/ui/Wrapper";
import { Text, View } from "react-native";

export default function login() {
  return (
    <Wrapper>
      <Title title="Welcome"/>
      <LoginForm />
    </Wrapper>
  );
}
