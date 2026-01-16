import type {
  IStaffPortalByBusinessManager,
  IOptionsByStaffPortalBusinessManager,
} from "@ptypes/staffPortal.types";

export interface IStaffPortalByBusinessManagerApi {
  abbreviatedName?: string | null;
  businessManagerCode?: string | null;
  descriptionUse?: string | null;
  publicCode?: string | null;
  staffPortalCatalogCode?: string | null;
  staffPortalId?: string | null;
  url?: string | null;
}

const mapStaffPortalByBusinessManagerApiToEntity = (
  resend: IStaffPortalByBusinessManagerApi
): IStaffPortalByBusinessManager => {
  return {
    abbreviatedName: String(resend.abbreviatedName ?? ""),
    businessManagerCode: String(resend.businessManagerCode ?? ""),
    descriptionUse: String(resend.descriptionUse ?? ""),
    publicCode: String(resend.publicCode ?? ""),
    staffPortalCatalogCode: String(resend.staffPortalCatalogCode ?? ""),
    staffPortalId: String(resend.staffPortalId ?? ""),
    url: String(resend.url ?? ""),
    businessManagerName: "",
    brandImageUrl: "",
  };
};

const mapStaffPortalByBusinessManagerApiToEntities = (
  resend: IStaffPortalByBusinessManagerApi[]
): IStaffPortalByBusinessManager[] => {
  return resend.map(mapStaffPortalByBusinessManagerApiToEntity);
};

export type { IOptionsByStaffPortalBusinessManager };
export {
  mapStaffPortalByBusinessManagerApiToEntities,
  mapStaffPortalByBusinessManagerApiToEntity,
};
