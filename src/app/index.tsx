import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Index:React.FC=()=> {
  return (
    <Redirect href={'/(tabs)'} />
  );
}

export default Index;