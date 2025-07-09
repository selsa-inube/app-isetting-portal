import { IIconAppearance } from "@inubekit/inubekit";

interface IMenuItem {
  disabled: boolean;
  description: string;
  icon: React.JSX.Element;
  path: string;
  onToggleInfoModal: () => void;
  onClick?: () => void;
  appearanceIcon?: IIconAppearance;
}

export type { IMenuItem };
