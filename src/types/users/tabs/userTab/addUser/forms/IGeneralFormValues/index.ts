import { IGeneralInfoForm } from "../IGeneralInfoForm/indexs";

interface IGeneralUserFormValues {
  generalInformationStep: {
    isValid: boolean;
    values: IGeneralInfoForm;
  };
}

export type { IGeneralUserFormValues };
