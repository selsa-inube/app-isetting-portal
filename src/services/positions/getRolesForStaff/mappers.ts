import { IRoleForStaff } from "@ptypes/rolesForStaff";

const mapRolesStaffApiToEntity = (rolesData: IRoleForStaff): IRoleForStaff => {
  const rolesMapped: IRoleForStaff = {
    id: String(rolesData.roleId),
    roleId: String(rolesData.roleId),
    roleName: String(rolesData.roleName),
    applicationName: String(rolesData.applicationName),
    isActive: false,
    useCasesByStaffRoles: Object(rolesData.useCasesByStaffRoles),
  };
  return rolesMapped;
};

const mapRolesStaffApiToEntities = (
  roles: IRoleForStaff[]
): IRoleForStaff[] => {
  return roles.map(mapRolesStaffApiToEntity);
};

export { mapRolesStaffApiToEntity, mapRolesStaffApiToEntities };
