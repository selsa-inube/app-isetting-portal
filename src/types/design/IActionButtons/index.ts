import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IMenuOptions } from "../IMenuOptions";

interface IActionButtons {
  smallScreen: boolean;
  showMenu: boolean;
  menuOptions: IMenuOptions[];
  entries: IFormEntry[];
  isAssignAll: boolean;
  handleToggleRol: () => void;
  handleToggleAllEntries: (allocate: boolean) => void;
}

export type { IActionButtons };
