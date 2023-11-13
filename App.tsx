import React from "react";
import { View, ImageBackground } from "react-native";
import { styles } from "./styles";
import { PrimeiraPagina } from "./src/screens/PrimeiraPagina";
import { SegundaPagina } from "./src/screens/SegundaPagina";

export default function App() {
  const ImagemDeFundo = require("./assets/imagemDeFundo.jpg");

  return (
    <View style={styles.container}>
      <ImageBackground source={ImagemDeFundo} style={styles.backgroundImage}>
        <PrimeiraPagina />
        <SegundaPagina />
      </ImageBackground>
    </View>
  )};
