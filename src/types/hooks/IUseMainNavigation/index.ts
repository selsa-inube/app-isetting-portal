import { Location } from "react-router-dom";
import { ICardData } from "@ptypes/home/ICardData";

interface IUseMainNavigation {
  optionsCards: ICardData[];
  location?: Location;
}

export type { IUseMainNavigation };
