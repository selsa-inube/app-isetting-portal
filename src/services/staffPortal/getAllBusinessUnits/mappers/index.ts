import { IAllBusinessUnits } from "@ptypes/staffPortal/IAllBusinessUnits";

const mapAllBusinessUnitEntities = (usersData: IAllBusinessUnits[]) => {
  return usersData.map((unit) => ({
     abbreviatedName: String(unit.abbreviatedName),
  businessUnit: String(unit.businessUnit),
  descriptionUse: String(unit.descriptionUse),
  firstMonthOfFiscalYear: String(unit.firstMonthOfFiscalYear),
  languageId: String(unit.languageId),
  publicCode: String(unit.publicCode),
  urlLogo: String(unit.urlLogo),
  }));
};


export { mapAllBusinessUnitEntities };
