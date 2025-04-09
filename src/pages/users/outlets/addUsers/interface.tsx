import { Stack, Breadcrumbs, Assisted } from "@inubekit/inubekit";
import { PageTitle } from "@design/label/PageTitle";
import { basic } from "@design/tokens";
import { IAddUsersUI } from "@ptypes/users/assisted/IAddUsersUI";
import { GeneralInformationForm } from "@pages/users/forms/generalInformationForm";
import { createUserConfig } from "@config/users/addUsersInvitation/assisted";

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
  } = props;
  return (
    <Stack
      direction="column"
      padding={`${basic.spacing.s400} ${basic.spacing.s800}`}
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
    </Stack>
  );
};

export { AddUsersUI };
