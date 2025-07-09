import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { IMenuOptions } from "../IMenuOptions";

interface IActionButtons {
  smallScreen: boolean;
  showMenu: boolean;
  menuOptions: IMenuOptions[];
  entries: IFormEntry[];
  isAssignAll: boolean;
  handleToggleRol: () => void;
  handleCloseMenuRol: () => void;
  handleToggleAllEntries: (allocate: boolean) => void;
}

export type { IActionButtons };