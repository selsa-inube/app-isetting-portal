import { IMissionData } from "./IMissionData";
import { IStaffByBusinessUnitAndRole } from "./IStaffRolesData";

interface IAddUserVerificationData {

biologicalSex: string;
  birthDay: string; 
  businessManagerCode: string;
  identificationNumber: string;
  identificationType: string;
  staffName: string;
  staffLastName: string;

  missionData: IMissionData;
  missionName: string;

  principalEmail: string;
  principalPhone: string;


  staffByBusinessUnitAndRole: IStaffByBusinessUnitAndRole[];


}
export type { IAddUserVerificationData };
