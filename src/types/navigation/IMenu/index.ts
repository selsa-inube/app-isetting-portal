import { IOption } from "@ptypes/navigation/IOption";
interface IMenu {
  options: IOption[];
  handleClose: () => void;
}

export type { IMenu };
