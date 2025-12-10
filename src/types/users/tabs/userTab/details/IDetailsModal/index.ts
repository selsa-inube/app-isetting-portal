import { IPosition } from "@ptypes/positions/assisted/IPosition";
import { IField } from "@ptypes/positions/details/IField";

interface IDetailsUserModal {
  labelsOptions: Record<string, IField[]>;
  data?: IPosition;
  title?: string;
}

export type { IDetailsUserModal };
