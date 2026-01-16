import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthAndData } from "@context/authAndDataProvider";
import { useFetchAplicationStaff } from "@hooks/positions/useAplication";
import { useEditPositions } from "@hooks/positions/useEditPositions";
import { useFetchRolesStaff } from "@hooks/positions/useFetchRolesStaff";
import { useSavePositions } from "@hooks/positions/useSavePositions";
import { editPositionTabsConfig } from "@config/positions/editPositions/tabs";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { IOptionInitialiceEntryApp } from "@ptypes/positions/assisted/IOptionInitialiceEntryApp";
import { EditPositionsUI } from "./interface";

const EditPositions = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const { appData } = useContext(AuthAndData);
  const { rolesStaff } = useFetchRolesStaff();

  const {
    formValues,
    generalInformationRef,
    isSelected,
    saveData,
    showRequestProcessModal,
    showGeneralInformation,
    showRolesForm,
    onSubmit,
    handleReset,
    setIsCurrentFormValid,
    handleTabChange,
    setShowModal,
    setSelectedToggle,
    roles,
  } = useEditPositions({ data, appData, rolesData: rolesStaff });

  const {
    savePositions,
    requestSteps,
    loading,
    showPendingReqModal,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    smallScreen,
  } = useSavePositions({
    businessUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowModal,
  });
  const { options } = useFetchAplicationStaff();

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
      setSelectedToggle={setSelectedToggle ?? []}
      smallScreen={smallScreen}
      roles={roles}
      options={options as IOptionInitialiceEntryApp[]}
      showGeneralInformation={showGeneralInformation}
      showRolesForm={showRolesForm}
      showRequestProcess={showRequestProcess}
      showRequestStatusModal={showRequestStatusModal}
    />
  );
};

export { EditPositions };
