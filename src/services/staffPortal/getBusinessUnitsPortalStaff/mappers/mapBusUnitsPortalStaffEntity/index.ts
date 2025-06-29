import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortal/IBusinessUnitsPortalStaff";

const mapBusinessUnitsPortalStaffApiToEntity = (
  businessUnit: IBusinessUnitsPortalStaff
): IBusinessUnitsPortalStaff => {
  const businessUnitData: IBusinessUnitsPortalStaff = {
    publicCode: String(businessUnit.businessUnitPublicCode),
    languageId: String(businessUnit.languageId),
    abbreviatedName: String(businessUnit.abbreviatedName),
    descriptionUse: String(businessUnit.descriptionUse),
    firstMonthOfFiscalYear: String(businessUnit.firstMonthOfFiscalYear),
    urlLogo: String(businessUnit.urlLogo),
  };
  return businessUnitData;
};

export {mapBusinessUnitsPortalStaffApiToEntity}