import { IGeneralInformationEntry } from "../IGeneralInformationEntry";

interface IFormAddMission {
  generalInformation: { isValid: boolean; values: IGeneralInformationEntry };
}
export type { IFormAddMission };
