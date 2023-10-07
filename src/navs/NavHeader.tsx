import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colorPalette, textFormat } from "../config";
import { SafeView } from "../components";

export default function NavHeader({}) {
  return (
    <SafeView style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.centeredContainer}>
        <Text style={styles.title}>AnimeSP</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: colorPalette.primary,
  },
  centeredContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colorPalette.tertiary,
    fontSize: textFormat.sizeBig,
  },
});
