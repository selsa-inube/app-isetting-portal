import { Button, Stack } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

import { labels } from "@config/verificationTitles";
import { EComponentAppearance } from "@enum/appearances";

import { AddUserVerificationStepSection } from "./VerificationStepSection";
import { IAddUserVerificationForm } from "@ptypes/users/tabs/userTab/addUser/forms/verificationForm/IAddUserVerificationForm";
import { addUserSteps } from "@config/users/addUsers/assisted/steps";

const AddUserVerificationForm = (props: IAddUserVerificationForm) => {
  const {
    updatedData,
    isMobile,
    onPreviousStep,
    onToggleModal,
    handleStepChange,
  } = props;
  const filteredSteps = addUserSteps.filter(
    (step) => step.name.toLowerCase() !== labels.verification
  );

  return (
    <Stack direction="column" gap={basic.spacing.s300}>
      {filteredSteps.map((step) => (
        <AddUserVerificationStepSection
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

export { AddUserVerificationForm };
