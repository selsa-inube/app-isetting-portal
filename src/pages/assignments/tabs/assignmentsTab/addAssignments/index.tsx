import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthAndData } from "@context/authAndDataProvider";
import { useAddAssignments } from "@hooks/addAssignments/useAddAssignments";
import { useSaveAssignments } from "@hooks/assignments/saveAssigments/useSaveAssignments";
import { EUseCase } from "@enum/useCase";
import { addAssignmentsSteps } from "@config/assignments/assisted/steps";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { AddAssignmentsUI } from "./interface";

const AddAssignments = () => {
  const location = useLocation();
  const { data } = location.state ?? {};
  const { appData } = useContext(AuthAndData);

  const {
    currentStep,
    smallScreen,
    formValid,
    formValues,
    formReferences,
    showModal,
    showRequestProcessModal,
    saveData,
    setShowModal,
    setCurrentStep,
    setRolesSelected,
    setSelectedToggle,
    handleToggleModal,
    handleNextStep,
    handlePreviousStep,
    setIsCurrentFormValid,
    handleSubmitClick,
    setShowRequestProcessModal,
  } = useAddAssignments({ absentOfficial: data });

  const {
    saveAssignments,
    requestSteps,
    loadingSendData,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    showPendingReqModal,
  } = useSaveAssignments({
    useCase: EUseCase.ADD,
    businessUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal,
  });

  return (
    <AddAssignmentsUI
      currentStep={currentStep}
      formValid={formValid}
      smallScreen={smallScreen}
      steps={addAssignmentsSteps}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      onToggleModal={handleToggleModal}
      formValues={formValues}
      formReferences={formReferences}
      setIsCurrentFormValid={setIsCurrentFormValid}
      absentOfficialSelected={data || ("" as string)}
      setSelectedToggle={setSelectedToggle}
      setRolesSelected={setRolesSelected}
      onClosePendingReqModal={handleClosePendingReqModal}
      showPendingReqModal={showPendingReqModal}
      loading={loadingSendData}
      setCurrentStep={setCurrentStep}
      requestSteps={requestSteps}
      showModal={showModal}
      saveAssignments={saveAssignments as ISaveDataResponse}
      showRequestProcessModal={showRequestProcessModal}
      onCloseRequestStatus={handleCloseRequestStatus}
      onFinishForm={handleSubmitClick}
    />
  );
};

export { AddAssignments };
