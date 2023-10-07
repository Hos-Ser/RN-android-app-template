import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colorPalette, textFormat } from "../config";

import { AppInputProps } from "../types";

export default function AppInput({ ...otherProps }: AppInputProps) {
  return (
    <TextInput
      style={styles.input}
      autoCorrect={false}
      autoCapitalize="none"
      placeholderTextColor={colorPalette.gray}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    fontSize: textFormat.sizeMed,
    color: colorPalette.white,
    borderColor: colorPalette.tertiary,
    borderWidth: 3,
    borderRadius: 12,
    height: 60,
    marginVertical: 4,
    paddingHorizontal: 8,
  },
});
