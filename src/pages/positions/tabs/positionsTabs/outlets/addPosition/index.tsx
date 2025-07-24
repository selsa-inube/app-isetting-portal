import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { useFetchRolesStaff } from "@hooks/positions/useFetchRolesStaff";
import { useAddStaffRoles } from "@hooks/positions/useAddStaffRoles";
import { useFetchAplicationStaff } from "@hooks/positions/useAplication";
import { useSavePositions } from "@hooks/positions/useSavePositions";
import { addStaffRolesSteps } from "@config/positions/addPositions/assisted";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { IFormEntry } from "@ptypes/assignments/assignmentForm/IFormEntry";
import { IOptionInitialiceEntryApp } from "@ptypes/positions/assisted/IOptionInitialiceEntryApp";
import { AddPositionUI } from "./interface";

const AddPosition = () => {
  const { rolesStaff } = useFetchRolesStaff();
  const {
    currentStep,
    formValues,
    generalInformationRef,
    isCurrentFormValid,
    selectedToggle,
    handleNextStep,
    handlePreviousStep,
    handleToggleModal,
    handleToggleModalApplication,
    setIsCurrentFormValid,
    handleSubmitClick,
    handleSubmitClickApplication,
    showModalApplicationStatus,
    showModal,
    setSelectedToggle,
    showRequestProcessModal,
    setCurrentStep,
    saveData,
    smallScreen,
    roles,
    disabled,
    setShowRequestProcessModal,
    setShowModal,
    navigate,
    setShowMultipurposeModal,
    showMultipurposeModal,
  } = useAddStaffRoles({rolesData:rolesStaff});

  const { appData } = useContext(AuthAndData);
  const {
    savePositions,
    requestSteps,
    loading,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    showPendingReqModal,
  } = useSavePositions({
   businessUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal
  });

  const { options } = useFetchAplicationStaff();

  const shouldShowRequestProcessModal =
    showRequestProcessModal && savePositions;

  const showPendingReqModals = !!(
    showPendingReqModal && savePositions?.requestNumber
  );

  return (
    <AddPositionUI
      navigate={navigate}
      savePositions={savePositions as ISaveDataResponse}
      showModalApplicationStatus={showModalApplicationStatus}
      requestSteps={requestSteps}
      showRequestProcessModal={showRequestProcessModal}
      onFinishForm={handleSubmitClick}
      onFinishFormApplicationStatus={handleSubmitClickApplication}
      showModal={showModal}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      generalInformationRef={generalInformationRef}
      initialValues={formValues}
      isCurrentFormValid={isCurrentFormValid}
      onNextStep={handleNextStep}
      onPreviousStep={handlePreviousStep}
      setIsCurrentFormValid={setIsCurrentFormValid}
      steps={addStaffRolesSteps}
      handlePreviousStep={handlePreviousStep}
      handleNextStep={handleNextStep}
      formValues={formValues}
      selectedToggle={selectedToggle as IFormEntry[]}
      setSelectedToggle={setSelectedToggle}
      smallScreen={smallScreen}
      roles={roles}
      disabled={disabled}
      onToggleModal={handleToggleModal}
      onToggleApplicationStatus={handleToggleModalApplication}
      loading={loading}
      onCloseRequestStatus={handleCloseRequestStatus}
      showMultipurposeModal={showMultipurposeModal}
      setShowMultipurposeModal={setShowMultipurposeModal}
      options={options as IOptionInitialiceEntryApp[]}
      showPendingReqModal={showPendingReqModal}
      onClosePendingReqModal={handleClosePendingReqModal}
      shouldShowRequestProcessModal={
        shouldShowRequestProcessModal as ISaveDataResponse
      }
      showPendingReqModals={showPendingReqModals}
    />
  );
};

export { AddPosition };
