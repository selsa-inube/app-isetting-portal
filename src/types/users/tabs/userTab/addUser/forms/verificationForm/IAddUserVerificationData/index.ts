import type { IContactDataFormValues } from "@ptypes/users/tabs/userTab/addUser/forms/IContactData";
import type { IGeneralInfoForm } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IGeneralInfoForm";
import type { IMissionForStaff } from "@ptypes/users/tabs/userTab/addUser/forms/stepData/IMissionForStaff";

import type { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import type { PositionsByBusinessUnitMap } from "@ptypes/users/tabs/userTab/addUser/forms/ByBusinessUnit/IPositionByBusinessUnit";

interface IAddUserVerificationData {
  generalInformationStep: IGeneralInfoForm;

  missionForStaffStep: IMissionForStaff;

  contactDataStep: IContactDataFormValues;

  businessEntityStep: {
    values: IFormEntry[];
  };
  positionByBusinessUnitStep: {
    values: PositionsByBusinessUnitMap;
  };
  roleByBusinessUnitStep: {
    values: IFormEntry[];
  };
}
export type { IAddUserVerificationData };
