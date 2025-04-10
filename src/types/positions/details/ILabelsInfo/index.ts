import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IField } from "@ptypes/interactiveModal/IField";
interface ILabelsInfo {
  labels: IField[];
  infoData: IPosition;
  hasLabels: boolean;
}
export type { ILabelsInfo };
