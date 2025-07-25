import { IToggleSize } from "@inubekit/inubekit";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IBusinessEntry } from "@ptypes/assignments/IBusinessEntry";

interface IToggleGroup {
  entries: IFormEntry[] | IBusinessEntry[];
  onSelectCheckChange: (id: string) => void;
  size?: IToggleSize;
}
export type { IToggleGroup };
