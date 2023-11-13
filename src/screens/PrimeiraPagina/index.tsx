import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { DecksCopy } from "../../components/DecksCopy";
import { styles } from "./styles";

export const PrimeiraPagina = () => {
  return (
    <View>
      <Input />
      <Button style={styles.button}>
        <Text style={styles.textButton}>Advanced search</Text>
      </Button>
      <DecksCopy />
    </View>
  )};
