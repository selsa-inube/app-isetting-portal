import { ICardData } from "../ICardData";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
interface IHome {
  data?: ICardData[];
  loading?: boolean;
  collapse: boolean;
  setCollapse: (value: boolean) => void;
  selectedClient: string;
  businessUnitsToTheStaff: IBusinessUnitsPortalStaff[];
  handleLogoClick: (businessUnit: IBusinessUnitsPortalStaff) => void;
  collapseMenuRef: React.RefObject<HTMLDivElement>;
  businessUnitChangeRef: React.RefObject<HTMLDivElement>;
  isTablet: boolean;
  smallScreen: boolean;
  username: string;
}

export type { IHome };
