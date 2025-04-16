import { MenuItemSpacingType } from "@ptypes/navigation/menuItem/ImenuItemSpacing";
interface IMenuItem {
  title: string;
  description?: string;
  spacing?: MenuItemSpacingType;
  iconBefore?: React.JSX.Element;
  iconAfter?: React.JSX.Element;
  isDisabled?: boolean;
  path?: string;
  onClick?: () => void;
}

export type { IMenuItem };
