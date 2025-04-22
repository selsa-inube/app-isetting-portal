import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

const mapBusinessUnitsPortalStaffToEntities = (
  rolesData: IBusinessUnitsPortalStaffId[]
): IBusinessUnitsPortalStaffId[] => {
  return rolesData.map((role) => ({
    missionId: String(role.missionId),
    missionName: String(role.missionName),
    descriptionUse: String(role.descriptionUse),
    businessManagerCode: String(role.businessManagerCode),
    MissionByRole: Object(role.MissionByRole),
  }));
};

const mapRolesStaffApiToEntities = (
  roles: IBusinessUnitsPortalStaffId[][]
): IBusinessUnitsPortalStaffId[][] => {
  return roles.map(mapBusinessUnitsPortalStaffToEntities);
};

export { mapBusinessUnitsPortalStaffToEntities, mapRolesStaffApiToEntities };
