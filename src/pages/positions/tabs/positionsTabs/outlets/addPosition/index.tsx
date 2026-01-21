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
import { AddPositionUI } from "./interface";
import { EUseCase } from "@src/enum/useCase";
import { IOptionInitialiceEntry } from "@src/types/positions/assisted/IOptionInitialiceEntry";
import { useModalAddGeneral } from "@src/hooks/users/tabs/userTab/addUser/saveUsers/useModalAddGeneral";

const AddPosition = () => {
  const { appData } = useContext(AuthAndData);

  const { rolesStaff } = useFetchRolesStaff(appData.token);
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
    onGoBack,
    handleGoBackModal,
  } = useAddStaffRoles({ rolesData: rolesStaff });

  const {
    savePositions,
   requestSteps,
    showPendingReqModal,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    errorFetchRequest,
    networkError,
    loadingSendData,
    hasError,
    errorData,
    handleToggleErrorModal,
  } = useSavePositions({
        useCase: EUseCase.ADD,
    businessUnits: appData.businessUnit.publicCode,
    businessManagerCode: appData.businessManager.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    token: appData.token,
    setSendData: setShowRequestProcessModal,
    setShowModal,

  });

 const { modalData, showDecision } = useModalAddGeneral({
    showGoBackModal: showModalApplicationStatus,
    loading: loadingSendData,
    hasError,
    errorData,
    networkError,
    errorFetchRequest,
    handleCloseModal: handleGoBackModal,
    handleGoBack: onGoBack,
    handleToggleErrorModal,
  });

  const { options } = useFetchAplicationStaff(appData.token);

  return (
    <AddPositionUI
      navigate={navigate}
      savePositions={savePositions as ISaveDataResponse}
      showModalApplicationStatus={showModalApplicationStatus}
      requestSteps={requestSteps}
      showRequestProcessModal={showRequestProcessModal}
      onFinishForm={handleSubmitClick}
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
      loading={loadingSendData}
      disabled={disabled}
      onToggleModal={handleToggleModal}
      onToggleApplicationStatus={handleToggleModalApplication}
      onCloseRequestStatus={handleCloseRequestStatus}
      showMultipurposeModal={showMultipurposeModal}
      setShowMultipurposeModal={setShowMultipurposeModal}
      options={options as IOptionInitialiceEntry[]}
      showPendingReqModal={showPendingReqModal}
      onClosePendingReqModal={handleClosePendingReqModal}
       modalData={modalData}
      showDecision={showDecision}
    />
  );
};

export { AddPosition };
