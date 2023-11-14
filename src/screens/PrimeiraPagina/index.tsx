import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { DecksCopy } from "../../components/DecksCopy";
import { styles } from "./styles";
import { SegundaPagina } from "../SegundaPagina";

export const PrimeiraPagina = () => {
  const ImagemDeFundo = require("../../../assets/imagemDeFundo.jpg");
  return (
    <View style={styles.container}>
      <ImageBackground source={ImagemDeFundo} style={styles.backgroundImage}>
      <Input />
      <Button onPress={SegundaPagina} style={styles.button}>
        <Text style={styles.textButton}>Advanced search</Text>
      </Button>
      <DecksCopy />
      </ImageBackground>
    </View>
  )};
