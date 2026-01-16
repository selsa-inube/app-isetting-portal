import { IBusinessUnit } from "@src/types/authAndDataProvider/IBusinessUnit";

const mapBusinessUnitFromApi = (data: IBusinessUnit[]) => {
  return data.map((item) => ({
    abbreviatedName: item.abbreviatedName,
    alias: item.alias,
    businessUnit: item.businessUnit,
    countryIso: item.countryIso,
    descriptionUse: item.descriptionUse,
    firstMonthOffFiscalYear: item.firstMonthOffFiscalYear,
    iconUrl: item.iconUrl,
    languageIso: item.languageIso,
    publicCode: item.publicCode,
    urlLogo: item.urlLogo,
  }));
};

export { mapBusinessUnitFromApi };
