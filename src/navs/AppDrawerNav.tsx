import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { LoginScreen, HomeScreen, AnimeScreen } from "../screens";
import { RootDrawerParams } from "../types";
import { colorPalette } from "../config";
import NavHeader from "./NavHeader";

const Drawer = createDrawerNavigator<RootDrawerParams>();

export default function AppDrawerNav({}) {
  return (
    <Drawer.Navigator
      backBehavior="initialRoute"
      initialRouteName="Home"
      screenOptions={{
        swipeEdgeWidth: 50,
        drawerPosition: "right",
        drawerLabelStyle: { color: colorPalette.tertiary },
        drawerStyle: { backgroundColor: colorPalette.primary },
        drawerItemStyle: { backgroundColor: colorPalette.secondary },
        header: () => <NavHeader />,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen
        name="Anime"
        component={AnimeScreen}
        options={{ drawerItemStyle: { display: "none" } }}
      />
    </Drawer.Navigator>
  );
}
