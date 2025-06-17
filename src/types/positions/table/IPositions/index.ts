import { PrivilegeOptionsConfig } from "@config/positions/tabs";

import { IBusinessUnitsPortalStaff } from "@ptypes/positions/IBusinessUnitsPortalStaff";
interface IPositionsTabUI {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPosition: string;
  data: IBusinessUnitsPortalStaff[];
  loading: boolean;
  smallScreen: boolean;
  label: (typeof PrivilegeOptionsConfig)[number] | undefined;
  setEntryDeleted: (id: string | number) => void;
}

export type { IPositionsTabUI };
