import { useAddUser } from "@hooks/users/tabs/userTab/addUser";
import { AddUserUI } from "./interface";
import { useOptionsBusinessEntity } from "@hooks/users/tabs/userTab/addUser/useOptionsBusinessUnit";
import { useRolesByBusinessUnit } from "@hooks/users/tabs/userTab/addUser/useRolesByBusinessUnit";

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

  const {
    setEntriesAdditionalBusinessEntity,
    entriesAdditionalBusinessEntity,
  } = useOptionsBusinessEntity({
    formValues,
  });

  const {
    rolesByBusinessUnit,
    selectRolesByBusinessUnit,
    positionsByBusinessUnit,
  } = useRolesByBusinessUnit(entriesAdditionalBusinessEntity);

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
      setEntriesAdditionalBusinessEntity={setEntriesAdditionalBusinessEntity}
      entriesAdditionalBusinessEntity={entriesAdditionalBusinessEntity}
      positionsByBusinessUnit={positionsByBusinessUnit}
      selectRolesByBusinessUnit={selectRolesByBusinessUnit}
    />
  );
};

export { AddUser };
