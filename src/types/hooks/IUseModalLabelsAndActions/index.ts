import { IAction } from "@ptypes/interactiveModal/IAction";
import { IField } from "@ptypes/interactiveModal/IField";

interface IUseModalLabelsAndActions {
  labels: IField[];
  actions?: IAction[];
}

export type { IUseModalLabelsAndActions };
