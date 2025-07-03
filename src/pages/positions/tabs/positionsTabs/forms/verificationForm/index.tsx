import { Button, Stack } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { IVerificationForm } from "@ptypes/verification/IVerificationForm";
import { AddPositionsSteps } from "@config/positions/assisted";
import { VerificationStepSection } from "./verificationStepSection";
import { labels } from "@config/verificationTitles";
import { EComponentAppearance } from "@enum/appearances";

const VerificationForm = (props: IVerificationForm) => {
  const {
    updatedData,
    isMobile,
    onPreviousStep,
    onToggleModal,
    handleStepChange,
  } = props;

  const filteredSteps = AddPositionsSteps.filter(
    (step) => step.name.toLowerCase() !== labels.verification
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

      <Stack justifyContent="flex-end" gap={basic.spacing.s250}>
        <Button
          fullwidth={isMobile}
          onClick={onPreviousStep}
          appearance={EComponentAppearance.GRAY}
        >
          {labels.previous}
        </Button>

        <Button
          fullwidth={isMobile}
          onClick={onToggleModal}
          appearance={EComponentAppearance.PRIMARY}
        >
          {labels.finally}
        </Button>
      </Stack>
    </Stack>
  );
};

export { VerificationForm };
