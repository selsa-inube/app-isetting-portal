import { useAddUser } from "@hooks/users/tabs/userTab/addUser";
import { AddUserUI } from "./interface";
import { useOptionsBusinessEntity } from "@hooks/users/tabs/userTab/addUser/optionsBusinessUnit";
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
    setRolesByBusinessUnit,
    selectPositionsByBusinessUnit,
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
      selectPositionsByBusinessUnit={selectPositionsByBusinessUnit}
      rolesByBusinessUnit={rolesByBusinessUnit}
      selectRolesByBusinessUnit={setRolesByBusinessUnit}
    />
  );
};

export { AddUser };
