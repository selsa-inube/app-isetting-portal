import { IGeneralInformationEntry } from "../IGeneralInformationEntry";
import { IOptionInitialiceEntry } from "../IOptionInitialiceEntry";

interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  rolesStaff: { isValid: boolean; values: IOptionInitialiceEntry[] };
}

export type { IFormAddPosition };
