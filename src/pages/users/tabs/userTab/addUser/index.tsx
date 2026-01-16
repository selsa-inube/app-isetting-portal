import { useAddUser } from "@hooks/users/tabs/userTab/addUser";
import { AddUserUI } from "./interface";
import { useOptionsBusinessEntity } from "@hooks/users/tabs/userTab/addUser/optionsBusinessUnit";
import { useRolesByBusinessUnit } from "@hooks/users/tabs/userTab/addUser/useRolesByBusinessUnit";
import { EUseCase } from "@src/enum/useCase";
import { AuthAndData } from "@src/context/authAndDataProvider";
import { useContext } from "react";
import { useSaveUsers } from "@src/hooks/users/tabs/userTab/addUser/saveUsers/useSaveUsers";
import { ISaveDataRequest } from "@src/types/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@src/types/saveData/ISaveDataResponse";
import { useModalAddGeneral } from "@src/hooks/users/tabs/userTab/addUser/saveUsers/useModalAddGeneral";

const AddUser = () => {
  const { appData } = useContext(AuthAndData);
  const {
    currentStep,
    formReferences,
    formValues,
    setFormValues,
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
    showRequestProcessModal,
    setShowRequestProcessModal,
    saveData,
    showModal,
    setShowModal,
    handleSubmit,
  } = useAddUser();

  const {
    setEntriesAdditionalBusinessEntity,
    entriesAdditionalBusinessEntity,
    activeEntries,
  } = useOptionsBusinessEntity({
    formValues,
    setFormValues,
  });

  const {
    rolesByBusinessUnit,
    setRolesByBusinessUnit,
    selectPositionsByBusinessUnit,
    positionsByBusinessUnit,
  } = useRolesByBusinessUnit({ formValues, setFormValues, activeEntries });
  const {
    saveUsers,
    requestSteps,
    showPendingReqModal,
    handleCloseRequestStatus,
    handleCloseProcess,
    handleClosePendingReqModal,
    errorFetchRequest,
    networkError, loadingSendData,
    hasError,
    errorData,
    handleToggleErrorModal,
  } = useSaveUsers({
    useCase: EUseCase.ADD,
    businessUnits: appData.businessUnit.publicCode,
    businessManagerCode: appData.businessManager.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal,
  });

  const { modalData, showDecision } = useModalAddGeneral({
    showGoBackModal,
    loading: loadingSendData,
    hasError,
    errorData,
    networkError,
    errorFetchRequest,
    handleCloseModal: handleGoBackModal,
    handleGoBack: onGoBack,
    handleToggleErrorModal,
  });
  return (
    <AddUserUI
      currentStep={currentStep}
      formReferences={formReferences}
      initialValues={formValues}
      isCurrentFormValid={isCurrentFormValid}
      title={title}
      steps={steps}
      handleModal={handleGoBackModal}
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
      saveUsers={saveUsers as ISaveDataResponse}
      requestSteps={requestSteps}
      showPendingReqModal={showPendingReqModal}
      showRequestProcessModal={showRequestProcessModal}
      onCloseRequestStatus={handleCloseRequestStatus}
      onCloseProcess={handleCloseProcess}
      onClosePendingReqModal={handleClosePendingReqModal}
      onSubmit={handleSubmit}
      showModal={showModal}
      modalData={modalData}
      showDecision={showDecision}
    />
  );
};


export { AddUser };
