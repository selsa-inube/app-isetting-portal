import { IOptionsByBusinessUnits } from "./staffPortal/IOptionsByBusinessUnits";

interface IOptionsByStaffPortalBusinessManager {
  optionStaffId: string;
  staffPortalCatalogId: string;
  staffPortalId: string;
}

interface IStaffPortalByBusinessManager {
  abbreviatedName: string;
  businessManagerCode: string;
  businessManagerName: string;
  descriptionUse: string;
  publicCode: string;
  staffPortalCatalogCode: string;
  staffPortalId: string;
  url: string;
  brandImageUrl: string;
  optionsByStaffPortalBusinessManager?: IOptionsByBusinessUnits[];
  [key: string]: string | IOptionsByBusinessUnits[] | undefined;
}

export type {
  IStaffPortalByBusinessManager,
  IOptionsByStaffPortalBusinessManager,
};
