import { IPosition } from "@pages/positions/tabs/positionsTabs/outlets/addPosition/types";

interface IField {
  id: string;
  labelName: string;
}

interface IDetailsModalProps {
  data?: IPosition;
  labelsOptions: IField[];
}

export type { IDetailsModalProps, IField };
