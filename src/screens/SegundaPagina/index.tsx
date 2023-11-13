import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { FooterSegTela } from "../../components/FooterSegTela";
import { Nivel } from "../../components/Nivel";

export const SegundaPagina = () => {
  return (
    <View style={styles.container}>
      <Nivel />
      <FooterSegTela />
    </View>
  )};
