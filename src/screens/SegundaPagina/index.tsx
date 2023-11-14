import React from "react";
import { ImageBackground, View } from "react-native";
import { styles } from "./styles";
import { FooterSegTela } from "../../components/FooterSegTela";
import { Nivel } from "../../components/Nivel";

export const SegundaPagina = () => {
  const ImagemDeFundo = require("../../../assets/imagemDeFundo.jpg");
  return (
    <View style={styles.container}>
      <ImageBackground source={ImagemDeFundo} style={styles.backgroundImage}>
        <Nivel />
        <FooterSegTela />
      </ImageBackground>
    </View>
  );
};
