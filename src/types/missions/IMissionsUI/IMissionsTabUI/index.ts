import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { IEntry } from "@ptypes/design/table/IEntry";

interface IMissionsTabUI {
  handleSearchMissions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchMission: string;
  data: IEntry[];
  loading: boolean;
  smallScreen: boolean;
  columnWidths: number[];
  label: (typeof PrivilegeOptionsConfig)[number] | undefined;
  disabledButton: boolean;
  showInfoModal: boolean;
  handleToggleInfoModal: () => void;
  setEntryDeleted: (id: string | number) => void;
}

export type { IMissionsTabUI };
