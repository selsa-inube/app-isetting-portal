import { IEntry } from "@ptypes/table/IEntry";

interface IAction {
  id: string;
  actionName: string;
  content: (entry: IEntry) => React.ReactNode;
}

export type { IAction };
