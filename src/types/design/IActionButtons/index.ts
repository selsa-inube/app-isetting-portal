import { IOption } from "@ptypes/navigation/IOption";
import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";

interface IActionButtons {
  smallScreen: boolean;
  showMenu: boolean;
  menuOptions: IOption[];
  entries: IFormEntry[];
  isAssignAll: boolean;
  handleToggleRol: () => void;
  handleCloseMenuRol: () => void;
  handleToggleAllEntries: (allocate: boolean) => void;
}

export type { IActionButtons };