import { ITemporaryRolesByBusiness } from "../ITemporaryRoles";

interface IAssignmentsData {
  assignmentDate: string;
  assignmentDescription: string;
  assignmentEndDate: string;
  assignmentId: string;
  assignmentType: string;
  businessManagerCode: string;
  businessManagerName: string;
  nameOfAbsentStaff: string;
  staffIdentificationNumber: string;
  staffLastName: string;
  staffName: string;
  temporaryRolesByBusinessUnit: ITemporaryRolesByBusiness[];
  id?: string | number;
  assignmentDateFormat?: string;
  assignmentEndDateFormat?: string;
  officialName?: string;
}

export type { IAssignmentsData };
