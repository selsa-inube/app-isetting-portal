import { PrivilegeOptionsConfig } from "@config/positions/tabs";

import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
interface IPositionsTabUI {
  handleSearchPositions: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchPosition: string;
  data: IBusinessUnitsPortalStaffId[];
  loading: boolean;
  smallScreen: boolean;
  label: (typeof PrivilegeOptionsConfig)[number] | undefined;
  setEntryDeleted: (id: string | number) => void;
}

export type { IPositionsTabUI };
