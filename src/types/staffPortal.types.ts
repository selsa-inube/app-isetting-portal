interface IOptionsByStaffPortalBusinessManager {
  optionStaffId: string;
  staffPortalCatalogId: string;
  staffPortalId: string;
}

interface IStaffPortalByBusinessManager {
  abbreviatedName: string;
  businessManagerCode: string;
  descriptionUse: string;
  publicCode: string;
  staffPortalCatalogCode: string;
  staffPortalId: string;
  url: string;
  optionsByStaffPortalBusinessManager?: IOptionsByStaffPortalBusinessManager[];
  [key: string]: string | IOptionsByStaffPortalBusinessManager[] | undefined;
}

export type {
  IStaffPortalByBusinessManager,
  IOptionsByStaffPortalBusinessManager,
};
