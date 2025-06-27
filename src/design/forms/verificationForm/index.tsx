import { Stack } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IVerificationForm } from "@ptypes/verification/IVerificationForm";
import { AddPositionsSteps } from "@config/positions/assisted";
import { VerificationStepSection } from "./verificationStepSection";

const VerificationForm = (props: IVerificationForm) => {
  const { updatedData, handleStepChange } = props;
  const filteredSteps = AddPositionsSteps.filter(
    (step) => step.name.toLowerCase() !== "verificación"
  );

  return (
    <Stack direction="column" gap={basic.spacing.s300}>
      {filteredSteps.map((step) => (
        <VerificationStepSection
          key={step.id}
          step={step}
          updatedData={updatedData}
          onStepChange={handleStepChange}
        />
      ))}
    </Stack>
  );
};

export { VerificationForm };
