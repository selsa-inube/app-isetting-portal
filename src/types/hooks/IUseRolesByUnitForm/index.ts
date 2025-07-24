import { IRolesByUnitEntry } from "@ptypes/assignments/assisted/IRolesByUnitEntry";

interface IUseRolesByUnitForm {
  entries: IRolesByUnitEntry[];
  setRolesSelected: React.Dispatch<React.SetStateAction<IRolesByUnitEntry[]>>;
  editDataOption?: boolean;
}

export type { IUseRolesByUnitForm };
