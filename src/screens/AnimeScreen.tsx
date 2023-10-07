import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { colorPalette } from "../config";
import { RootDrawerParams } from "../types";

type Props = NativeStackScreenProps<RootDrawerParams, "Anime">;

export default function AnimeScreen({ route }: Props) {
  const { pic, title } = route.params;

  return (
    <View style={styles.centeredContainer}>
      <Text>{pic}</Text>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorPalette.secondary,
  },
});
