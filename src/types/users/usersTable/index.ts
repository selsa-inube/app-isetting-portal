interface IStaffByBusinessUnitAndRole {
  staffId: string;
  roleName: string;
  businessUnitCode: string;
  BusinessUnitName: string;
}
interface IUsers {
  staffId: string;
  staffName: string;
  biologicalSex: string;
  identificationTypeNaturalPerson: string;
  identificationNumber: string;
  birthDay: string;
  principalEmail: string;
  principalPhone: string;
  businessManagerCode: string;
  businessManagerName: string;
  missionName: string;
  userAccount: string;
  staffByBusinessUnitAndRole: IStaffByBusinessUnitAndRole[];
}

export type { IUsers, IStaffByBusinessUnitAndRole };
