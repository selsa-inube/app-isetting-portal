import { ISpinnerAppearance } from "@inubekit/inubekit";
import { IRequestSteps } from "@ptypes/requestsInProgress/IRequestSteps";
import { ISaveDataResponse } from "@ptypes/requestsInProgress/saveData/ISaveDataResponse";

interface IRequestProcess {
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
  saveData?: ISaveDataResponse;
  appearance?: ISpinnerAppearance;
}

export type { IRequestProcess };
