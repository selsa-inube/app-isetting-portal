import { IContactDataFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IContactData";
import { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IGeneralInfoForm";
import { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { PositionsByBusinessUnitMap } from "../ByBusinessUnit/IPositionByBusinessUnit";

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
  businessUnitsStep: IFormEntry[];
  positionByBusinessUnitStep: PositionsByBusinessUnitMap[];
  roleByBusinessUnitStep: IFormEntry[];
}

export type { IGeneralUserFormValues };
