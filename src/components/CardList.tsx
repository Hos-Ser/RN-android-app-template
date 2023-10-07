import React from "react";
import { FlatList, StyleSheet } from "react-native";

import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VerticalCard";
import { CardProps, CardListProps } from "../types";

const DATA: CardProps[] = [
  {
    title: "title1",
    pic: "pic1",
  },
  {
    title: "title2",
    pic: "pic2",
  },
  {
    title: "title3",
    pic: "pic3",
  },
  {
    title: "title4",
    pic: "pic4",
  },
  {
    title: "title5",
    pic: "pic5",
  },
  {
    title: "title6",
    pic: "pic6",
  },
];

export default function CardList({ cardType }: CardListProps) {
  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={({ item }) =>
        cardType === "horizontal" ? (
          <HorizontalCard pic={item.pic} title={item.title} />
        ) : (
          <VerticalCard pic={item.pic} title={item.title} />
        )
      }
      horizontal={true}
      overScrollMode={"never"}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});
