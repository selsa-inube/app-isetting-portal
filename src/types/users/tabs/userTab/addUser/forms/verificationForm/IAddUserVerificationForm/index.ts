import { IAddUserVerificationData } from "../IAddUserVerificationData";

interface IAddUserVerificationForm {
  updatedData: IAddUserVerificationData;
  isMobile: boolean;
  onPreviousStep: () => void;
  onToggleModal: () => void;
  handleStepChange: (stepNumber: number) => void;
}

export type { IAddUserVerificationForm };
