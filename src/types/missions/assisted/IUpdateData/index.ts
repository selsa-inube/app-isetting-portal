import { IGeneralInformationEntry } from "../IGeneralInformationEntry";

interface IFormsUpdateData {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
}

export type { IFormsUpdateData };
