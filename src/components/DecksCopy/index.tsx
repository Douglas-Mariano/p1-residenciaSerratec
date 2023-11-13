import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./styles";
import iconeSeta from "../../../assets/iconeSeta.png";
import imagemCard from "../../../assets/imagemCard.png";
import iconeInfo from "../../../assets/iconeInfo.png";
import crown from "../../../assets/coroa.png";

export const DecksCopy = () => {
  const data = [
    {
      title: "NW Raw Heal",
      author: "XDDK",
      crowns: "264",
      cards: imagemCard,
      id: "1",
    },
    {
      title: "Go Wi Clone",
      author: "ziko",
      crowns: "165",
      cards: imagemCard,
      id: "2",
    },
  ];

  type ItemProps = {
    title: string;
    author: string;
    crowns: string;
    cards: any;
  };

  const Item = ({ title, author, crowns, cards }: ItemProps) => (
    <View style={styles.container}>
      <View style={styles.context}>
        <Image source={iconeSeta} style={styles.imagemSeta} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.centro}>
        <Text style={styles.subTitle}>AUTHOR: {author}</Text>
        <Image source={iconeInfo} style={styles.imagemSeta} />
      </View>
      <View>
        <Image source={cards} style={styles.imagemCard} />
      </View>
      <View style={styles.foot}>
        <Text style={styles.subTitle}>{crowns}x </Text>
        <Image source={crown} style={styles.imagemCoroa} />
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Item
          title={item.title}
          author={item.author}
          crowns={item.crowns}
          cards={item.cards}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  )};
