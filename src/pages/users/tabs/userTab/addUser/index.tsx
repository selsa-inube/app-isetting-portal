import { useAddUser } from "@hooks/users/tabs/userTab/addUser";
import { AddUserUI } from "./interface";

const AddUser = () => {
  const {
    currentStep,
    formReferences,
    formValues,
    isCurrentFormValid,
    title,
    steps,
    showGoBackModal,
    smallScreen,
    onGoBack,
    handleGoBackModal,
    assistedLength,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
    handleToggleModal,
    description,
    showMissionNameModal,
    handleToggleMissionModal,
  } = useAddUser();

  return (
    <AddUserUI
      currentStep={currentStep}
      formReferences={formReferences}
      initialValues={formValues}
      isCurrentFormValid={isCurrentFormValid}
      title={title}
      steps={steps}
      showGoBackModal={showGoBackModal}
      handleModal={handleGoBackModal}
      onGoBack={onGoBack}
      smallScreen={smallScreen}
      assistedLength={assistedLength as "small" | "large"}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      onToggleModal={handleToggleModal}
      description={description}
      showMissionNameModal={showMissionNameModal}
      onToggleMissionModal={handleToggleMissionModal}
    />
  );
};

export { AddUser };
