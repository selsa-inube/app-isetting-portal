import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IField } from "../IField";

interface IDetailsModal {
  labelsOptions: IField[];
  data?: IPosition;
  title?: string;
}

export type { IDetailsModal };
