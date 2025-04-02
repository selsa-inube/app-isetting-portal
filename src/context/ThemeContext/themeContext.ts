import { createContext, useContext } from "react";

import { IThemeContextType } from "@ptypes/positions/themeContext";

const ThemeContext = createContext<IThemeContextType>({
  themeName: "sistemasenlinea",
  setThemeName: () => {},
});

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, useTheme };
export type { IThemeContextType };
