import { IBusinessUnitsPortalStaff } from "@ptypes/positions/IBusinessUnitsPortalStaff";


const mapBusinessManagersIdEntities = (
  rolesData: IBusinessUnitsPortalStaff[]
): IBusinessUnitsPortalStaff[] => {
  return rolesData.map((role) => ({
    id: String(role.positionId),
    positionId: String(role.positionId),
    businessUnitCode: String(role.businessUnitCode),
    businessUnitName: String(role.businessUnitName),
    descriptionUse: String(role.descriptionUse),
    positionName: String(role.positionName),
    positionStaffByRoles: Object(role.positionStaffByRoles),
  }));
};

export { mapBusinessManagersIdEntities };
