import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { Dispatch, SetStateAction } from "react";

type ThemeName = keyof typeof tokensWithReference;
interface IThemeContextType {
  themeName: ThemeName;
  setThemeName: Dispatch<SetStateAction<ThemeName>>;
}

export type { ThemeName, IThemeContextType };
