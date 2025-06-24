import { ISpinnerAppearance } from "@inubekit/inubekit";
import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

interface IRequestProcessContent {
  descriptionRequestProcess: {
    title: string;
    description: string;
  };
  portalId: string;
  requestProcessSteps: IRequestSteps[];
  descriptionRequestStatus: (responsible: string) => {
    actionText: string;
    description: string;
    title: string;
  };
  onCloseRequestStatus: () => void;
  onCloseProcess: () => void;
  saveData?: ISaveDataResponse;
  appearance?: ISpinnerAppearance;
}

export type { IRequestProcessContent };
