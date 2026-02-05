import { IEntry } from "@ptypes/design/table/IEntry";

interface IAction {
  id: string;
  actionName: string;
  content: (entry: IEntry) => React.ReactNode;
}

export type { IAction };
