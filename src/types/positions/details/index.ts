import { IPosition } from "../assisted/IPosition";

interface IField {
  id: string;
  labelName: string;
}

interface IDetailsModal {
  data?: IPosition;
  labelsOptions: IField[];
}

export type { IDetailsModal, IField };
