import { Stack, Breadcrumbs, Assisted } from "@inubekit/inubekit";
import { PageTitle } from "@design/label/PageTitle";
import { basic } from "@design/tokens";
import { createUserInvitationConfig } from "@config/users/addUsersInvitation/assisted";
import { IAddUsersInvitationUI } from "@ptypes/users/assisted/IAddUsersInvitationUI";
import { GeneralInformationForm } from "@pages/users/forms/generalInformationForm";

const AddUsersInvitationUI = (props: IAddUsersInvitationUI) => {
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
        <Breadcrumbs crumbs={createUserInvitationConfig[0].crumbs} />
        <PageTitle
          title={createUserInvitationConfig[0].title}
          description={createUserInvitationConfig[0].description}
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

export { AddUsersInvitationUI };
