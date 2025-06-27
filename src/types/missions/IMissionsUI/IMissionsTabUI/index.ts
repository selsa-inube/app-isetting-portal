import { PrivilegeOptionsConfig } from "@config/positions/tabs";
import { IMisionData } from "@ptypes/missions/IMisionData";

interface IMissionsTabUI {
  handleSearchMissions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchMission: string;
  data: IMisionData[];
  loading: boolean;
  smallScreen: boolean;
  columnWidths: number[];
  label: (typeof PrivilegeOptionsConfig)[number] | undefined;
  setEntryDeleted: (id: string | number) => void;
}

export type { IMissionsTabUI };
