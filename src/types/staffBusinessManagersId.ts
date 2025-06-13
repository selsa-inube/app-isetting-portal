interface IBusinessManagerStaffMissionByRole {
  missionId: string;
  roleId: string;
  transactionOperation: "Insert";
}
interface IBusinessUnitsPortalStaffId {
  missionId: string;
  missionName: string;
  descriptionUse: string;
  businessManagerCode: string;
  MissionByRole: IBusinessManagerStaffMissionByRole[];
  id?: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type { IBusinessUnitsPortalStaffId };
