import { Assisted, Breadcrumbs, Stack } from "@inubekit/inubekit";

import { Title } from "@design/label/Title";
import { basic } from "@design/tokens";

import { GeneralInformationForm } from "./forms/generalInformation";

import { DecisionModal } from "@design/modals/decisionModal";
import { addUserUIConfig } from "@config/users/addUsers/addUserUI";
import { goBackModal } from "@config/goBackModal";
import { IAddUserUI } from "@ptypes/users/tabs/userTab/addUser/IAddUserUI";
import { crumbsAddUser } from "@config/users/addUsers/navigation";

const AddUserUI = (props: IAddUserUI) => {
  const {
    currentStep,
    formReferences,
    initialValues,
    isCurrentFormValid,
    title,
    steps,
    showGoBackModal,
    smallScreen,
    onGoBack,
    handleModal,
    assistedLength,
    onNextStep,
    onPreviousStep,
    setIsCurrentFormValid,
    onToggleModal,
    description,
  } = props;
  return (
    <Stack
      direction="column"
      padding={
        smallScreen
          ? `${basic.spacing.s200}`
          : `${basic.spacing.s300} ${basic.spacing.s800}`
      }
      width="-webkit-fill-available"
    >
      <Stack gap={basic.spacing.s300} direction="column">
        <Stack gap={basic.spacing.s300} direction="column">
          <Breadcrumbs crumbs={crumbsAddUser} />
          <Title
            title={title}
            description={description}
            sizeTitle="large"
            onClick={handleModal}
          />
        </Stack>
        <Stack gap={basic.spacing.s300} direction="column">
          <Assisted
            step={steps[currentStep - 1]}
            totalSteps={steps.length}
            onBackClick={onPreviousStep}
            onNextClick={onNextStep}
            onSubmitClick={onToggleModal}
            disableNext={!isCurrentFormValid}
            controls={addUserUIConfig.AssistedConfig}
            size={assistedLength}
          />
          <Stack direction="column">
            {currentStep === addUserUIConfig.generalInformationStep && (
              <GeneralInformationForm
                ref={formReferences.generalInformation}
                initialValues={initialValues.generalInformationStep.values}
                onFormValid={setIsCurrentFormValid}
                handleNextStep={onNextStep}
              />
            )}
          </Stack>
        </Stack>
      </Stack>
      {showGoBackModal && (
        <DecisionModal
          portalId="portal"
          title={goBackModal.title}
          description={goBackModal.description}
          actionText={goBackModal.actionText}
          onCloseModal={handleModal}
          onClick={onGoBack}
        />
      )}
    </Stack>
  );
};

export { AddUserUI };
