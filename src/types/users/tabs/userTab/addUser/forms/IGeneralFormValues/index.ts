import { IContactDataFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IContactData";
import { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IGeneralInfoForm";
import { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";

interface IGeneralUserFormValues {
  generalInformationStep: {
    isValid: boolean;
    values: IGeneralInfoForm;
  };
  missionForStaffStep: {
    isValid: boolean;
    values: IMissionForStaff;
  };
  contactDataStep: {
    isValid: boolean;
    values: IContactDataFormValues;
  };
  businessUnits: string[];
}

export type { IGeneralUserFormValues };
