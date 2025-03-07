import { useContext } from "react";
import { UseFetchRolesStaff } from "@hooks/positions/useFetchRolesStaff";
import { IEntry } from "@design/templates/assignmentForm/types";
import { UseAddStaffRoles } from "@hooks/positions/useAddStaffRoles";
import { addStaffRolesSteps } from "@config/positions/addPositions/assisted";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { UseSavePositions } from "@hooks/positions/useSavePositions";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseFetchAplicaionStaff } from "@hooks/positions/useAplication";
import { IOptionInitialiceEntryApp } from "./types";
import { AddStaffRolesUI } from "./interface";
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
  } = UseAddStaffRoles(rolesStaff);

  const { appData } = useContext(AuthAndData);
  const { savePositions, requestSteps, loading, handleCloseRequestStatus } =
    UseSavePositions(
      appData.businessUnit.publicCode,
      appData.user.userAccount,
      showRequestProcessModal,
      saveData as ISaveDataRequest,
      setShowRequestProcessModal,
      setShowModal
    );

  const { options } = UseFetchAplicaionStaff();

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
      selectedToggle={selectedToggle as IEntry[]}
      setSelectedToggle={setSelectedToggle}
      smallScreen={smallScreen}
      roles={roles}
      disabled={disabled}
      onToggleModal={handleToggleModal}
      onToggleApplicationStatus={handleToggleModalApplication}
      loading={loading}
      onCloseRequestStatus={handleCloseRequestStatus}
      options={options as IOptionInitialiceEntryApp[]}
    />
  );
};

export { AddPosition };
