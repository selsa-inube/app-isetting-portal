import { IActions } from "@pages/positions/tabs/positionsTabs/types";

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
  data?: IActions;
  catalogName?: string;
}

export type { ITabConfig, IPositionsUI };
