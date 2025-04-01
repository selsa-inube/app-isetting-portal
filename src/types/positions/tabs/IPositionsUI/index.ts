import { IEntry } from "@ptypes/table/IEntry";

interface IPositionsUI {
  isSelected: string;
  handleTabChange: (id: string) => void;
  smallScreenTab: boolean;
  smallScreen: boolean;
  data?: IEntry;
  catalogName?: string;
}

export type { IPositionsUI };
