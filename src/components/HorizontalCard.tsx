import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CardProps, RootDrawerParams } from "../types";
import { DrawerNavigationProp } from "@react-navigation/drawer";

export default function HorizontalCard({ pic, title }: CardProps) {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParams>>();

  return (
    <Pressable
      onPress={() => navigation.navigate("Anime", { pic: pic, title: title })}
    >
      <ImageBackground
        source={require("../assets/splash.png")}
        style={styles.container}
        borderRadius={12}
      >
        <Text style={styles.title}>{pic}</Text>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 4,
  },
  title: {
    color: "#fff",
  },
});
