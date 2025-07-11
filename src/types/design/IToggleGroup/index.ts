import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";

interface IToggleGroup {
  entries: IFormEntry[];
  onSelectCheckChange: (id: string) => void;
}
export type { IToggleGroup };
