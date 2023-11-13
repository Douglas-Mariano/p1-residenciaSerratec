import React from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

export const Input = () => {
  return( 
  <TextInput style={styles.input} placeholder="Type deck title" />
)};
