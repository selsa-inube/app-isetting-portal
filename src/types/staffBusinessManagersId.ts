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
  missionByRole: IBusinessManagerStaffMissionByRole[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export type { IBusinessUnitsPortalStaffId };
