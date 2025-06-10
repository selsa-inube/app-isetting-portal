import { useContext } from "react";
import { UseFetchRolesStaff } from "@hooks/positions/useFetchRolesStaff";
import { UseAddStaffRoles } from "@hooks/positions/useAddStaffRoles";
import { addStaffRolesSteps } from "@config/positions/addPositions/assisted";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { UseSavePositions } from "@hooks/positions/useSavePositions";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseFetchAplicaionStaff } from "@hooks/positions/useAplication";
import { IFormEntry } from "@ptypes/assignmentForm/IFormEntry";
import { IOptionInitialiceEntryApp } from "@ptypes/positions/assisted/IOptionInitialiceEntryApp";
import { AddStaffRolesUI } from "./interface";
import { postionsButtonText } from "@config/positions/assisted/buttonText";
const AddPosition = () => {
  const { rolesStaff } = UseFetchRolesStaff();
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
  } = UseAddStaffRoles(rolesStaff);

  const { appData } = useContext(AuthAndData);
  const {
    savePositions,
    requestSteps,
    loading,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    showPendingReqModal,
  } = UseSavePositions(
    appData.businessUnit.publicCode,
    appData.user.userAccount,
    showRequestProcessModal,
    saveData as ISaveDataRequest,
    setShowRequestProcessModal,
    setShowModal
  );

  const { options } = UseFetchAplicaionStaff();
  const buttonText =
    currentStep === addStaffRolesSteps.length
      ? postionsButtonText.buttonHandleSubmit
      : postionsButtonText.buttonHandleNext;

  const shouldShowRequestProcessModal =
    showRequestProcessModal && savePositions;

  const showPendingReqModals = !!(
    showPendingReqModal && savePositions?.requestNumber
  );

  return (
    <AddStaffRolesUI
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
      initialGeneralInformationValues={formValues.generalInformation.values}
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
      buttonText={buttonText}
      shouldShowRequestProcessModal={
        shouldShowRequestProcessModal as ISaveDataResponse
      }
      showPendingReqModals={showPendingReqModals}
    />
  );
};

export { AddPosition };
