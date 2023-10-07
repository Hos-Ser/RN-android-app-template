import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { AppDrawerNav } from "./src/navs";
import { UserContextProvider } from "./src/contexts";

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <AppDrawerNav />
      </NavigationContainer>
    </UserContextProvider>
  );
}
