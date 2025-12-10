import type { IAssistedStep } from "@inubekit/inubekit";
import type { IAddUserVerificationData } from "../IAddUserVerificationData";

interface IAddUserVerificationStepSection {
  step: IAssistedStep;
  updatedData: IAddUserVerificationData;
  onStepChange: (stepNumber: number) => void;
}

export type { IAddUserVerificationStepSection };
