import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";

interface IRolesByUnitEntry {
  id: string;
  name: string;
  publicCode: string;
  roles?: IFormEntry[];
  actionButton?: string;
  iconButton?: React.ReactElement;
}

export type { IRolesByUnitEntry };
