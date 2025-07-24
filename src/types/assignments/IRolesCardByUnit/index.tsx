import { IFormEntry } from "../assignmentForm/IFormEntry";

interface IRolesCardByUnit {
  id: string;
  businessUnit: string;
  roles: IFormEntry[];
  actionButton: string;
  iconButton: React.ReactElement;
  onButtonClick: (id: string) => void;
  onSelectCheckChange: (id: string) => void;
}

export type { IRolesCardByUnit };
