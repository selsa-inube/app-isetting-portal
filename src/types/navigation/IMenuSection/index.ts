import { ISection } from "@ptypes/navigation/menuSection/ISection";
import { MenuItemSpacingType } from "@ptypes/navigation/menuItem/ImenuItemSpacing";
interface IMenuSection {
  sections: ISection[];
  children: React.ReactNode;
  spacing?: MenuItemSpacingType;
  divider?: boolean;
}

export type { IMenuSection };
