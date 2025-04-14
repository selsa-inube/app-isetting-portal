import { IFormAddPosition } from "@ptypes/forms/verificationForm/IFormAddPosition";
interface IVerificationStepSection {
  step: { id: string | number; name: string; number: number };
  updatedData: IFormAddPosition;
  onStepChange: (stepId: number) => void;
}

export type { IVerificationStepSection };
