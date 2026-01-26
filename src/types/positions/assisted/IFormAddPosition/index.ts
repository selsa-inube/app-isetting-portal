import { IOptionInitialiceEntryApp } from "@src/types/forms/verificationForm/IOptionInitialiceEntryApp";
import { IGeneralInformationEntry } from "../IGeneralInformationEntry";
import { IOptionInitialiceEntry } from "../IOptionInitialiceEntry";

interface IFormAddPosition {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
  rolesStaff: { isValid: boolean; values: IOptionInitialiceEntry[] };
  applicationStaff: { isValid: boolean; values: IOptionInitialiceEntryApp[] };
}
export type { IFormAddPosition };
