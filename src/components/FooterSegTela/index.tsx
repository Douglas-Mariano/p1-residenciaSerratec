import React from "react";
import { Image, Text, View } from "react-native";
import { Button } from "../../components/Button";
import iconeTrofeu from "../../../assets/iconeTrofeu.png";
import { styles } from "./styles";

export const FooterSegTela = () => {
  return (
    <View style={styles.container}>
      <View style={styles.context}>
        <Text style={styles.text}>Reiniciar a temporada de ligas.</Text>
        <Text style={styles.textContext}>4600</Text>
        <Image source={iconeTrofeu} style={styles.icone} />
      </View>
      <View style={styles.footer}>
        <Button style={styles.button}>
          <Text style={styles.textButton}>Fechar</Text>
        </Button>
      </View>
    </View>
  )};
