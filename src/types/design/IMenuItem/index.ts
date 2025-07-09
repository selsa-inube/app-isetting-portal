interface IMenuItem {
  disabled: boolean;
  description: string;
  icon: React.JSX.Element;
  path: string;
  onToggleInfoModal: () => void;
  onClick?: () => void;
}

export type { IMenuItem };
