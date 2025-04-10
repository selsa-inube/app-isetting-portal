import { Stack, Breadcrumbs, Assisted, Button } from "@inubekit/inubekit";
import { PageTitle } from "@design/label/PageTitle";
import { basic } from "@design/tokens";
import { IAddUsersUI } from "@ptypes/users/assisted/IAddUsersUI";
import { GeneralInformationForm } from "@pages/users/forms/generalInformationForm";
import { createUserConfig } from "@config/users/addUsersInvitation/assisted";
import { UserbuttonText } from "@config/users/addUsersInvitation/assisted/buttonText";

const AddUsersUI = (props: IAddUsersUI) => {
  const {
    steps,
    currentStep,
    onPreviousStep,
    onNextStep,
    onToggleModal,
    disabled,
    smallScreen,
    generalInformationRef,
    initialGeneralInformationValues,
    setIsCurrentFormValid,
    handlePreviousStep,
    handleNextStep,
  } = props;
  return (
    <Stack
      direction="column"
      padding={
        smallScreen ? "auto" : `${basic.spacing.s400} ${basic.spacing.s800}`
      }
      gap={basic.spacing.s600}
    >
      <Stack gap={basic.spacing.s300} direction="column">
        <Breadcrumbs crumbs={createUserConfig[0].crumbs} />
        <PageTitle
          title={createUserConfig[0].title}
          description={createUserConfig[0].description}
          navigatePage="/privileges/users"
        />
      </Stack>

      <Assisted
        step={steps[currentStep - 1]}
        totalSteps={steps.length}
        onBackClick={onPreviousStep}
        onNextClick={onNextStep}
        onSubmitClick={onToggleModal}
        disableNext={disabled}
        controls={{
          goBackText: "Anterior",
          goNextText: "Siguiente",
          submitText: "Finalizar",
        }}
        size={smallScreen ? "small" : "large"}
      />

      {currentStep === 1 && (
        <GeneralInformationForm
          ref={generalInformationRef}
          initialValues={initialGeneralInformationValues}
          onFormValid={setIsCurrentFormValid}
          handleNextStep={onNextStep}
        />
      )}

      <Stack
        gap={basic.spacing.s100}
        justifyContent="flex-end"
        margin={
          smallScreen
            ? `${basic.spacing.s800} ${basic.spacing.s0}  ${basic.spacing.s0}  ${basic.spacing.s0}`
            : "nobe"
        }
      >
        {currentStep !== 1 && (
          <Button
            onClick={handlePreviousStep}
            type="button"
            disabled={currentStep === steps[0].id}
            spacing="wide"
            variant="none"
            appearance="gray"
          >
            {UserbuttonText.buttonHandlePrevious}
          </Button>
        )}
        <Button
          onClick={() =>
            currentStep === steps.length ? onToggleModal() : handleNextStep()
          }
          spacing="wide"
          disabled={disabled}
        >
          {currentStep === steps.length
            ? `${UserbuttonText.buttonHandleSubmit}`
            : `${UserbuttonText.buttonHandleNext}`}
        </Button>
      </Stack>
    </Stack>
  );
};

export { AddUsersUI };
