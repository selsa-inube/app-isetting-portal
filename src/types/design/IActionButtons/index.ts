import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IMenuOptions } from "../IMenuOptions";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";

interface IActionButtons {
  smallScreen: boolean;
  showMenu: boolean;
  menuOptions: IMenuOptions[];
  entries: IFormEntry[] | IBusinessEntry[];
  isAssignAll: boolean;
  handleToggleRol: () => void;
  handleCloseMenuRol: () => void;
  handleToggleAllEntries: (allocate: boolean) => void;
}

export type { IActionButtons };