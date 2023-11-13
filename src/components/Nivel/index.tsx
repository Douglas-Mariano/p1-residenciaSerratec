import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import tarjaMaiorCampeao from "../../../assets/tarjaMaiorCampeao.jpg";
import escudoMaiorCampeao from "../../../assets/iconeMaiorCampeao.png";
import tarjaGrandeCampeao from "../../../assets/tarjaGrandeCampeao.png";
import escudoGrandeCampeao from "../../../assets/iconeGrandeCampeao.png";
import iconeInfo from "../../../assets/iconeInfo.png";
import { styles } from "./styles";

export const Nivel = () => {
  const data = [
    {
      tarja: tarjaMaiorCampeao,
      escudo: escudoMaiorCampeao,
      id: "1",
    },
    {
      tarja: tarjaGrandeCampeao,
      escudo: escudoGrandeCampeao,
      id: "2",
    },
  ];
  type ItemProps = {
    tarja: any;
    escudo: any;
  };
  const Item = ({ tarja, escudo }: ItemProps) => (
    <View  style={styles.container}>
      <Image style={styles.imagemTarja} source={tarja} />
      <Image style={styles.imagemEscudo} source={escudo} />
      <View style={styles.centro}>
        <Text style={styles.text}>Informações sobre baú e doações</Text>
        <Image source={iconeInfo} style={styles.info} />
      </View>
    </View>
  );
  return (
    <View  style={styles.container}>
       <Text style={styles.title}>Você atingiu</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Item tarja={item.tarja} escudo={item.escudo} />
      )}
      keyExtractor={(item) => item.id}
    />
    </View>
  )};
