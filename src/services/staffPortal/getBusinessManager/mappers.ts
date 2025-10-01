import { IBusinessManagers } from "@ptypes/staffPortal/IBusinessManagers";

const mapBusinessManagerApiToEntity = (
  businessManager: Record<string, string>
): IBusinessManagers => ({
  id: businessManager.businessManagerId,
  publicCode: businessManager.publicCode,
  language: businessManager.languageId,
  abbreviatedName: businessManager.abbreviatedName,
  description: businessManager.descriptionUse,
  urlBrand: businessManager.urlBrand,
  urlLogo: businessManager.urlLogo,
  customerId: businessManager.customerId,
});

export { mapBusinessManagerApiToEntity };
