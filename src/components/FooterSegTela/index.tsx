import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import { styles } from "./styles";

export const FooterSegTela = () => {
  return (
    <View style={styles.proximaTemporada}>
        <Text style={styles.text}>Reiniciar a temporada de ligas.</Text>
      <View style={styles.footer}>
        <Button style={styles.button}>
          <Text style={styles.textButton}>Fechar</Text>
        </Button>
      </View>
    </View>
  )};
