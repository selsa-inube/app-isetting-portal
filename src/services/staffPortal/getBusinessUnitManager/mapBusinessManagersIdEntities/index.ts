import { IBusinessesUnit } from "@ptypes/staffPortal/IBusinessesUnit";

const mapBusinessUnitManagerApiToEntity = (
  data: IBusinessesUnit,
): IBusinessesUnit => {
  return {
    publicCode: data.publicCode,
    descriptionUse: data.descriptionUse,
    abbreviatedName: data.abbreviatedName,
    alias: data.alias,
    businessUnit: data.businessUnit,
    countryIso: data.countryIso,
    firstMonthOfFiscalYear: data.firstMonthOfFiscalYear,
    iconUrl: data.iconUrl,
    languageIso: data.languageIso,
    urlLogo: data.urlLogo,
  };
};

export { mapBusinessUnitManagerApiToEntity };
