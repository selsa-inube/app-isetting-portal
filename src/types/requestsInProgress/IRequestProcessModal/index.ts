import { IIconAppearance } from "@inubekit/inubekit";
import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
interface IRequestProcessModal {
  portalId: string;
  appearance: IIconAppearance;
  requestSteps: IRequestSteps[];
  isMobile: boolean;
  title: string;
  description: string;
  sizeIcon?: string;
}

export type { IRequestProcessModal };
