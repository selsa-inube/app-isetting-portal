import { IPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";

interface IField {
  id: string;
  labelName: string;
}

interface IDetailsModal {
  data?: IPosition;
  labelsOptions: IField[];
}

export type { IDetailsModal, IField };
