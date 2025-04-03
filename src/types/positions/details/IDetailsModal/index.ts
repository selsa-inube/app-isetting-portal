import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IField } from "../IField";

interface IDetailsModal {
  data?: IPosition;
  labelsOptions: IField[];
}

export type { IDetailsModal };
