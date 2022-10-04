import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Routes } from "./src/routes";
import { darkTheme, lightTheme } from "./src/themes/theme";
import { ThemeProvider } from "./src/themes/Theme";

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      <Routes />
    </ThemeProvider>
  );
}
