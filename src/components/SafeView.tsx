import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { SafeViewProps } from "../types";
import { colorPalette } from "../config";

export default function SafeView({
  children,
  style,
  ...restPrp
}: SafeViewProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...restPrp}
    >
      {children}
      <StatusBar backgroundColor={colorPalette.primary} style="light" />
    </View>
  );
}
