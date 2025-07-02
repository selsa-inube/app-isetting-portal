import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";

interface IToggleGroup {
  entries: IFormEntry[];
  onSelectCheckChange: (id: string) => void;
}
export type { IToggleGroup };
