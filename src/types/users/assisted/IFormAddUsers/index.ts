import { IGeneralInformationEntry } from "../IGeneralInformationEntry";

interface IFormAddUsers {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
}
export type { IFormAddUsers };
