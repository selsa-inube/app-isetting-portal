import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";
import { IAppData } from "../IAppData";

interface IAuthDataContainer {
  appData: IAppData;

  useCases: string;
  businessUnitsToTheStaff: IBusinessUnitsPortalStaff[];

  setAppData: React.Dispatch<React.SetStateAction<IAppData>>;
  setBusinessUnitsToTheStaff: React.Dispatch<
    React.SetStateAction<IBusinessUnitsPortalStaff[]>
  >;
  setUseCases: React.Dispatch<React.SetStateAction<string>>;
}

export type { IAuthDataContainer };
