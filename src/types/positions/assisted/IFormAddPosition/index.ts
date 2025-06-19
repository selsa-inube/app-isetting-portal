import { IGeneralInformationEntry } from "../IGeneralInformationEntry";
import { IOptionInitialiceEntry } from "../IOptionInitialiceEntry";
import { IOptionInitialiceEntryApp } from "../IOptionInitialiceEntryApp";
interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  rolesStaff: { isValid: boolean; values: IOptionInitialiceEntry[] };
  applicationStaff: { isValid: boolean; values: IOptionInitialiceEntryApp[] };
}
export type { IFormAddPosition };
