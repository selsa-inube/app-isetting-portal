import { IRolesByBusinessUnit } from "@ptypes/assignments/IRolesByBusinessUnit";

const mapRolesByBusinessUnitEntities = (
  rolesData: IRolesByBusinessUnit[]
): IRolesByBusinessUnit[] => {
  return rolesData.map((role) => ({
    id: String(role.roleId),
    roleName: String(role.roleName),
    value: String(role.roleName),
    descriptionUse: String(role.descriptionUse),
  }));
};

export { mapRolesByBusinessUnitEntities };
