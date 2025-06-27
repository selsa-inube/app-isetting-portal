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
  missionName: string;
  userAccount: string;
  staffByBusinessUnitAndRole: IStaffByBusinessUnitAndRole[];
  id?: string | number;
}

export type { IUsers };
