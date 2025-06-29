import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { ThemeContext, ThemeName } from "./themeContext";
import { inube } from "@inubekit/inubekit";
import { Theme } from "@ptypes/theme";

interface IThemeProviderWrapper {
  children: ReactNode;
}

const ThemeProviderWrapper = ({ children }: IThemeProviderWrapper) => {
  const savedTheme =
    (localStorage.getItem("themeName") as ThemeName) || "sistemasenlinea";
  const [themeName, setThemeName] = useState<ThemeName>(savedTheme);

  useEffect(() => {
    localStorage.setItem("themeName", themeName);
  }, [themeName]);

  const theme = {
    ...tokensWithReference[themeName],
    ...inube,
  } as Theme;

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProviderWrapper };
