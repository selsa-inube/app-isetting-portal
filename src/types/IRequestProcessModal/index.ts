import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";
import { ISpinnerAppearance } from "@inubekit/inubekit";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";

interface IRequestProcessModal {
  descriptionRequestProcess: {
    title: string;
    description: string;
  };
  portalId: string;
  loading: boolean;
  requestProcessSteps: IRequestSteps[];
  descriptionRequestStatus: (
    requestNumber: string,
    responsible: string
  ) => { actionText: string; description: string; title: string };
  onCloseRequestStatus: () => void;
  saveData?: ISaveDataResponse;
  appearance?: ISpinnerAppearance;
}
export type { IRequestProcessModal };
