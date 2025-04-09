import { UseAddUser } from "@hooks/users/useAddUser";
import { addUsersSteps } from "@config/users/addUsersInvitation/stepsUsersInvitation";
import { AddUsersUI } from "./interface";

const AddUsers = () => {
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
  } = UseAddUser();

  return (
    <AddUsersUI
      smallScreen={smallScreen}
      steps={addUsersSteps}
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

export { AddUsers };
