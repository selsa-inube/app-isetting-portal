import type { IAssistedStep } from "@inubekit/inubekit";
import { IAddUserVerificationStep } from "../IAddUserVerificationData/IVerificationStep";

interface IAddUserVerificationStepSection {
  step: IAssistedStep;
  updatedData: IAddUserVerificationStep;
  onStepChange: (stepNumber: number) => void;
}

export type { IAddUserVerificationStepSection };
