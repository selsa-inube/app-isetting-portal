import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { IAppData } from "../IAppData";

interface IAuthDataContainer {
  appData: IAppData;
  businessUnitSigla: string;
  businessUnitsToTheStaff: IBusinessUnitsPortalStaff[];
  setAppData: React.Dispatch<React.SetStateAction<IAppData>>;
  setBusinessUnitSigla: React.Dispatch<React.SetStateAction<string>>;
  setBusinessUnitsToTheStaff: React.Dispatch<
    React.SetStateAction<IBusinessUnitsPortalStaff[]>
  >;
}

export type { IAuthDataContainer };
