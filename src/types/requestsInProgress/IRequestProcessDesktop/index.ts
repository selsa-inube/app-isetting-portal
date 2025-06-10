import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
interface IRequestProcessDesktop {
  requestSteps: IRequestSteps[];
  sizeIcon: string;
  stepCurrent: number;
  stepCurrentIndex: number;
}

export type { IRequestProcessDesktop };
