import { IFormAddPosition } from "@ptypes/forms/verificationForm/IFormAddPosition";
import { IRequestSteps } from "@ptypes/feedback/requestProcess/IRequestSteps";
interface IVerificationForm {
  requestSteps: IRequestSteps[];
  showModal: boolean;
  showRequestProcessModal: boolean;
  updatedData: IFormAddPosition;
  handleStepChange: (stepId: number) => void;
  onFinishForm?: () => void;
  onPreviousStep?: () => void;
  onToggleModal?: () => void;
}

export type { IVerificationForm };
