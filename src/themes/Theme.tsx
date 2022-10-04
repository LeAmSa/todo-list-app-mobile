//Arquivo para criar o contexto da aplicação que recebe o tema e possui funções capazes de alterá-lo

import React, { createContext, useEffect, useState } from "react";

//as => forma de importar um componente com o mesmo nome dando outro apelido
import { ThemeProvider as ThemeProviderStyled } from "styled-components/native";

import { darkTheme, lightTheme } from "./theme";

//Persistência ao tema
import AsyncStorage from "@react-native-async-storage/async-storage";

//criando um enum para evitar erros de digitação
export enum ThemeType {
  light = "light",
  dark = "dark",
}

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

//criando um context
export const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

//criando um provider que substituirá o ThemeProvider do styled component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(ThemeType.dark);

  async function loadTheme() {
    const savedTheme = await AsyncStorage.getItem("@theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }

  useEffect(() => {
    loadTheme();
  }, []);

  function toggleTheme() {
    let selectedTheme;
    if (theme === ThemeType.light) {
      selectedTheme = ThemeType.dark;
    } else {
      selectedTheme = ThemeType.light;
    }
    setTheme(selectedTheme);
    AsyncStorage.setItem("@theme", selectedTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};
