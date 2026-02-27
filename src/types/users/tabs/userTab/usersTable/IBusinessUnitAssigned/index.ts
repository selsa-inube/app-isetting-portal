import { IBusinessUnitRole } from "../IBusinessUnitRole";

interface IBusinessUnitAssigned {
  businessUnitCode: string;
  businessUnitName: string;
  positionName: string;
  roles: IBusinessUnitRole[];
}
export type { IBusinessUnitAssigned };
