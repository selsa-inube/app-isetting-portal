import { IToggleSize } from "@inubekit/inubekit";
import { IFormEntry } from "../../IFormEntry";
import { IToggleTableColumn } from "../IToggleTableColumn";

interface IToggleTableGroupProps {
  entries: IFormEntry[];
  columnsTitles: IToggleTableColumn[];
  onSelectCheckChange: (id: string) => void;
  size?: IToggleSize;
}
export type { IToggleTableGroupProps };
