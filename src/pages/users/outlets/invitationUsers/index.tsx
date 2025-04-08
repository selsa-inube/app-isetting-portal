import { UseAddUserInvitation } from "@hooks/users/useAddUserInvitation";
import { addUsersInvitationSteps } from "@config/users/addUsersInvitation/stepsUsersInvitation";
import { AddUsersInvitationUI } from "./interface";

const AddUsersInvitation = () => {
  const {
    smallScreen,
    currentStep,
    handlePreviousStep,
    handleNextStep,
    handleToggleModal,
    disabled,
    generalInformationRef,
    formValues,
    setIsCurrentFormValid,
  } = UseAddUserInvitation();

  return (
    <AddUsersInvitationUI
      smallScreen={smallScreen}
      steps={addUsersInvitationSteps}
      currentStep={currentStep}
      onPreviousStep={handlePreviousStep}
      onNextStep={handleNextStep}
      onToggleModal={handleToggleModal}
      disabled={disabled}
      generalInformationRef={generalInformationRef}
      initialGeneralInformationValues={formValues.generalInformation.values}
      setIsCurrentFormValid={setIsCurrentFormValid}
    />
  );
};

export { AddUsersInvitation };
