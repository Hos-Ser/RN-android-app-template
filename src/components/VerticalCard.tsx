import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";

import { CardProps } from "../types";

export default function VerticalCard({ pic, title }: CardProps) {
  return (
    <ImageBackground
      source={require("../assets/splash.png")}
      style={styles.container}
      borderRadius={12}
    >
      <Text style={styles.title}>{pic}</Text>
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 4,
  },
  title: {
    color: "#fff",
  },
});
