import { IMissionData } from "../../addUser/forms/verificationForm/IAddUserVerificationData/IMissionData";
import { IBusinessUnitAssigned } from "../IBusinessUnitAssigned";
import { IStaffByBusinessUnitAndRole } from "../IStaffByBusinessUnitAndRole";

interface IUsers {
  staffId: string;
  staffName: string;
  biologicalSex: string;
  identificationTypeNaturalPerson: string;
  identificationDocumentNumber: string;
  birthDay: string;
  principalEmail: string;
  principalPhone: string;
  businessManagerCode: string;
  businessManagerName: string;
  userAccount: string;
  missionData: IMissionData;
  businessUnitsAsigned: IBusinessUnitAssigned[];
  staffByBusinessUnitAndRole: IStaffByBusinessUnitAndRole[];
  staffLastName?: string;
  id?: string | number;
}

export type { IUsers };
