import { IPositionStaffByRoles } from "../IPositionStaffByRoles";
interface IBusinessUnitsPortalStaff {
  businessUnitCode: string;
  businessUnitName: string;
  descriptionUse: string;
  positionId: string;
  positionName: string;
  id?: string | number;
  positionStaffByRoles: IPositionStaffByRoles[];
}

export type { IBusinessUnitsPortalStaff };
