import { useContext } from "react";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";
import { useAddMission } from "@hooks/missions/useAddMission";
import { assistedSteps } from "@config/missions/missionTab/assisted/assistedSteps";
import { AddMissionUI } from "./interface";
import { useSaveMission } from "@hooks/missions/useSaveMission";
import { UseCase } from "@enum/useCase";

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
  } = useAddMission();

  const { appData } = useContext(AuthAndData);
  const {
    saveMission,
    requestSteps,
    loadingSendData,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    showPendingReqModal,
  } = useSaveMission({
      useCase: UseCase.ADD,
    bussinesUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal}
  );

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
    />
  );
};

export { AddMission };
