import {
  IOptionsByStaffPortalBusinessManager,
  IStaffPortalByBusinessManager,
} from "@ptypes/staffPortal.types";

const mapStaffPortalByBusinessManagerApiToEntity = (
  resend: Record<
    string,
    string | IOptionsByStaffPortalBusinessManager[] | undefined
  >
): IStaffPortalByBusinessManager => {
  const buildResend: IStaffPortalByBusinessManager = {
    abbreviatedName: String(resend.abbreviatedName),
    businessManagerCode: String(resend.businessManagerCode),
    descriptionUse: String(resend.descriptionUse),
    publicCode: String(resend.publicCode),
    staffPortalCatalogCode: String(resend.staffPortalCatalogCode),
    staffPortalId: String(resend.staffPortalId),
    url: String(resend.url),
  };
  return buildResend;
};

const mapStaffPortalByBusinessManagerApiToEntities = (
  resend: Record<
    string,
    string | IOptionsByStaffPortalBusinessManager[] | undefined
  >[]
): IStaffPortalByBusinessManager[] => {
  return resend.map(mapStaffPortalByBusinessManagerApiToEntity);
};
export {
  mapStaffPortalByBusinessManagerApiToEntities,
  mapStaffPortalByBusinessManagerApiToEntity,
};
