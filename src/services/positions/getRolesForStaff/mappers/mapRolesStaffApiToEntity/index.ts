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



export { mapRolesStaffApiToEntity };
