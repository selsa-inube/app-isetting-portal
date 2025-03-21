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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  catalogName?: string;
}

export type { ITabConfig, IPositionsUI };
