import { Location } from "react-router-dom";
import { ICardData } from "@ptypes/home/ICardData";

interface IUseMainNavigation {
  optionsCards: ICardData[];
  logout: () => void;
  location?: Location;
}


export type { IUseMainNavigation };