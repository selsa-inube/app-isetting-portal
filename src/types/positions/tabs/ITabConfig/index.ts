import { IEntry } from "@design/table/types";

interface ITabConfig {
  id: string;
  isDisabled: boolean;
  label: string;
  notificationIndicators?: number;
}

interface IPositionsUI {
  isSelected: string;
  handleTabChange: (id: string) => void;
  smallScreenTab: boolean;
  smallScreen: boolean;
  data?: IEntry;
  catalogName?: string;
}

export type { ITabConfig, IPositionsUI };
