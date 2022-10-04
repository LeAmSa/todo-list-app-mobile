import { DefaultTheme } from "styled-components/native";

const darkTheme: DefaultTheme = {
  colors: {
    background: "#31315c",
    taskBackground: "#43446A",
    border: "#4A4B6F",
    onBackground: "#fff",
    inputBackground: "#272851",
    inputPlaceholder: "#ffffff78",
    completedBgTask: "#333452",
  },
};

const lightTheme: DefaultTheme = {
  colors: {
    background: "#fff",
    taskBackground: "#fff",
    border: "#e4e4e4",
    onBackground: "#9C9AA5",
    inputBackground: "#d5e5f1",
    inputPlaceholder: "#acacac",
    completedBgTask: "#d5e5f1",
  },
};

export { darkTheme, lightTheme };
