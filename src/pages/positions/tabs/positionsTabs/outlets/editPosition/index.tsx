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
    onSubmit,
    handleReset,
    setIsCurrentFormValid,
    handleTabChange,
    setShowModal,
    setSelectedToggle,
  } = UseEditPositions(data, appData, rolesStaff);

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
      showRequestProcessModal={showRequestProcessModal}
      onCloseRequestStatus={handleCloseRequestStatus}
      showPendingReqModal={showPendingReqModal}
      onClosePendingReqModal={handleClosePendingReqModal}
      onButtonClick={onSubmit}
      onReset={handleReset}
      setSelectedToggle={setSelectedToggle || []}
      smallScreen={smallScreen}
    />
  );
};

export { EditPositions };
