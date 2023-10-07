import React, { useCallback, useState, useEffect, createContext } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View, ScrollView } from "react-native";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";

import { colorPalette } from "../config";
import { RootDrawerParams } from "../types";
import { CardList } from "../components";

type Props = NativeStackScreenProps<RootDrawerParams, "Home">;

preventAutoHideAsync();

export default function HomeScreen({}: Props) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      setTimeout(() => {
        setAppIsReady(true);
      }, 300);
    };
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.centeredContainer} onLayout={onLayoutRootView}>
      <ScrollView>
        <CardList cardType="horizontal" />
        <CardList cardType="vertical" />
        <CardList cardType="horizontal" />
        <CardList cardType="vertical" />
        <CardList cardType="horizontal" />
      </ScrollView>
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
  Header: {
    textAlign: "right",
    color: colorPalette.white,
  },
});
