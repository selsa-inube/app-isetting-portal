import { IMenuItem } from "@ptypes/navigation/menuItem/IMenuItem";
interface ISection {
  title?: string;
  links: IMenuItem[];
}

export type { ISection };
