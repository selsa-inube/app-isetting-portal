import { IEntry } from "@ptypes/design/table/IEntry";

interface IActionsTable {
  id: string;
  content: (entry: IEntry) => React.ReactNode;
  mobilePriority?: boolean;
  actionName?: string;
  onClick?: (entry: IEntry) => void;
}
export type { IActionsTable };
