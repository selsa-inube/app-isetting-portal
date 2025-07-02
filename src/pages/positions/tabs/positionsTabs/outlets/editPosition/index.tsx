import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseSavePositions } from "@hooks/positions/useSavePositions";
import { editPositionTabsConfig } from "@config/positions/editPositions/tabs";
import { UseEditPositions } from "@hooks/positions/useEditPositions";
import { UseFetchRolesStaff } from "@hooks/positions/useFetchRolesStaff";
import { EditPositionsUI } from "./interface";
import { IOptionInitialiceEntryApp } from "@ptypes/positions/assisted/IOptionInitialiceEntryApp";
import { UseFetchAplicaionStaff } from "@hooks/positions/useAplication";

const EditPositions = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const { appData } = useContext(AuthAndData);
  const { rolesStaff } = UseFetchRolesStaff();

  const {
    formValues,
    generalInformationRef,
    isSelected,
    saveData,
    showRequestProcessModal,
    showGeneralInformation,
    showRolesform,
    onSubmit,
    handleReset,
    setIsCurrentFormValid,
    handleTabChange,
    setShowModal,
    setSelectedToggle,
    roles,
  } = UseEditPositions({ data, appData, rolesData: rolesStaff });

  const {
    savePositions,
    requestSteps,
    loading,
    showPendingReqModal,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    smallScreen,
  } = UseSavePositions(
    appData.businessUnit.publicCode,
    appData.user.userAccount,
    showRequestProcessModal,
    saveData as ISaveDataRequest,
    setShowModal
  );
  const { options } = UseFetchAplicaionStaff();

  const showRequestProcess = Boolean(showRequestProcessModal && savePositions);

  const showRequestStatusModal = Boolean(
    showPendingReqModal && savePositions?.requestNumber
  );

  return (
    <EditPositionsUI
      editPositionTabsConfig={editPositionTabsConfig}
      isSelected={isSelected}
      onTabChange={handleTabChange}
      generalInformationRef={generalInformationRef}
      initialValues={formValues}
      setIsCurrentFormValid={setIsCurrentFormValid}
      savePositions={savePositions as ISaveDataResponse}
      requestSteps={requestSteps}
      loading={loading}
      onCloseRequestStatus={handleCloseRequestStatus}
      onClosePendingReqModal={handleClosePendingReqModal}
      onButtonClick={onSubmit}
      onReset={handleReset}
      setSelectedToggle={setSelectedToggle || []}
      smallScreen={smallScreen}
      roles={roles}
      options={options as IOptionInitialiceEntryApp[]}
      showGeneralInformation={showGeneralInformation}
      showRolesform={showRolesform}
      showRequestProcess={showRequestProcess}
      showRequestStatusModal={showRequestStatusModal}
    />
  );
};

export { EditPositions };
