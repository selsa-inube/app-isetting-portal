import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";

interface IRequestProcess {
  requestSteps: IRequestSteps[];
  sizeIcon: string;
  stepCurrent: number;
  stepCurrentIndex: number;
  percentage: string;
}

export type { IRequestProcess };
