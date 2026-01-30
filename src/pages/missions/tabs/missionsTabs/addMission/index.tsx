import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { useSaveMission } from "@hooks/missions/useSaveMission";
import { useAddMission } from "@hooks/missions/useAddMission";
import { EUseCase } from "@enum/useCase";
import { assistedSteps } from "@config/missions/missionTab/assisted/assistedSteps";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AddMissionUI } from "./interface";
import { useModalAddGeneral } from "@src/hooks/users/tabs/userTab/addUser/saveUsers/useModalAddGeneral";

const AddMission = () => {
  const {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    showModalApplicationStatus,
    showModal,
    showRequestProcessModal,
    saveData,
    smallScreen,
    disabled,
    setCurrentStep,
    setShowRequestProcessModal,
    setShowModal,
    handleNextStep,
    handlePreviousStep,
    handleToggleModal,
    handleToggleModalApplication,
    setIsCurrentFormValid,
    handleSubmitClick,
    navigate,
    showGoBackModal,
    handleGoBackModal,
  } = useAddMission();

  const { appData } = useContext(AuthAndData);
  const {
    saveMission,
    requestSteps,
    showPendingReqModal,
    errorFetchRequest,
    networkError,
    loadingSendData,
    hasError,
    errorData,
    handleToggleErrorModal,
    handleCloseRequestStatus,
    handleCloseProcess,
    handleClosePendingReqModal,
  } = useSaveMission({
    useCase: EUseCase.ADD,
    businessUnits: appData.businessUnit.publicCode,
    businessManagerCode: appData.businessManager.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal,
    token: appData.token,
  });

  const { modalData, showDecision } = useModalAddGeneral({
    showGoBackModal,
    loading: loadingSendData,
    hasError,
    errorData,
    networkError,
    errorFetchRequest,
    handleCloseModal: handleGoBackModal,
    handleGoBack: handlePreviousStep,
    handleToggleErrorModal,
  });
  return (
    <AddMissionUI
      navigate={navigate}
      saveMission={saveMission as ISaveDataResponse}
      showModalApplicationStatus={showModalApplicationStatus}
      requestSteps={requestSteps}
      showRequestProcessModal={showRequestProcessModal}
      onFinishForm={handleSubmitClick}
      showModal={showModal}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      generalInformationRef={generalInformationRef}
      initialGeneralInformationValues={formValues.generalInformation.values}
      isCurrentFormValid={isCurrentFormValid}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      steps={assistedSteps}
      handlePreviousStep={handlePreviousStep}
      handleNextStep={handleNextStep}
      formValues={formValues}
      smallScreen={smallScreen}
      disabled={disabled}
      onToggleModal={handleToggleModal}
      onToggleApplicationStatus={handleToggleModalApplication}
      onCloseRequestStatus={handleCloseRequestStatus}
      showPendingReqModal={showPendingReqModal}
      onClosePendingReqModal={handleClosePendingReqModal}
      showPendingReqModals={showPendingReqModal}
      loading={loadingSendData}
      modalData={modalData}
      showDecision={showDecision}
      onCloseProcess={handleCloseProcess}
    />
  );
};

export { AddMission };
