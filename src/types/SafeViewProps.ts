import { ReactNode, ComponentProps } from "react";
import { View, ViewStyle } from "react-native";

type SafeViewProps = {
  children: ReactNode;
  style: ViewStyle;
} & ComponentProps<typeof View>;

export default SafeViewProps;
