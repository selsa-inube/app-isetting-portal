import { IGeneralInfoForm } from "../stepData/IGeneralInfoForm/indexs";
import { IMissionForStaff } from "../stepData/IMissionForStaff";

interface IGeneralUserFormValues {
  generalInformationStep: {
    isValid: boolean;
    values: IGeneralInfoForm;
  };
  missionForStaffStep: {
    isValid: boolean;
    values: IMissionForStaff;
  };
}

export type { IGeneralUserFormValues };
