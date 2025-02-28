import { INavNavigation } from "@inubekit/inubekit";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";

interface ICardData {
  id: string;
  label: string;
  description: string;
  icon: string | React.ReactNode;
  url: string;
}

interface ISection {
  title: string;
  links: ILink[];
}

interface ILink {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface INav {
  items: INavNavigation;
  breakpoint: string;
}

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

export type { INav, ISection, ICardData, IHome };
