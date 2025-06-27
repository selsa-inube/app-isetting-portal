import { IAction } from "../table/IAction";
import { IEntry } from "../table/IEntry";

interface IActionsModal {
  actions: IAction[];
  entry: IEntry;
  onClose: () => void;
}

export type { IActionsModal };