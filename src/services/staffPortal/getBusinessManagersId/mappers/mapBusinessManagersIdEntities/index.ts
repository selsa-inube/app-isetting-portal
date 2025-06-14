import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

const mapBusinessManagersIdEntities = (
  rolesData: IBusinessUnitsPortalStaffId[]
): IBusinessUnitsPortalStaffId[] => {
  return rolesData.map((role) => ({
    id: String(role.missionId),
    missionId: String(role.missionId),
    missionName: String(role.missionName),
    descriptionUse: String(role.descriptionUse),
    businessManagerCode: String(role.businessManagerCode),
    MissionByRole: Object(role.MissionByRole),
  }));
};

export { mapBusinessManagersIdEntities };
