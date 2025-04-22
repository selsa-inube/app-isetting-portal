import { IIconAppearance } from "@inubekit/inubekit";
import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
interface IRequestProcessMobile {
  requestSteps: IRequestSteps[];
  sizeIcon: string;
  appearance: IIconAppearance;
}

export type { IRequestProcessMobile };
