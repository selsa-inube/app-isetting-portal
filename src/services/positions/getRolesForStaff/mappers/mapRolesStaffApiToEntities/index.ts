import { IRoleForStaff } from "@ptypes/rolesForStaff";
import { mapRolesStaffApiToEntity } from "../mapRolesStaffApiToEntity";

const mapRolesStaffApiToEntities = (
  roles: IRoleForStaff[]
): IRoleForStaff[] => {
  return roles.map(mapRolesStaffApiToEntity);
};

export { mapRolesStaffApiToEntities };
