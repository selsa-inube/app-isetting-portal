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
import { EditPositionsUI } from "./interface";
import { EUseCase } from "@enum/useCase";
import { IOptionInitialiceEntry } from "@ptypes/positions/assisted/IOptionInitialiceEntry";

const EditPositions = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const { appData } = useContext(AuthAndData);

  const { rolesStaff } = useFetchRolesStaff(appData.token);
  const {
    formValues,
    generalInformationRef,
    isSelected,
    saveData,
    showRequestProcessModal,
    showGeneralInformation,
    showRolesForm,
    smallScreen,
    onSubmit,
    handleReset,
    setIsCurrentFormValid,
    handleTabChange,
    setShowModal,
    setSelectedToggle,
    roles,
    setShowRequestProcessModal,
  } = useEditPositions({ data, appData, rolesData: rolesStaff });

  const {
    savePositions,
    requestSteps,
    loadingSendData,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    handleCloseProcess,
    showPendingReqModal,
  } = useSavePositions({
    businessUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    token: appData.token,
    setSendData: setShowRequestProcessModal,
    useCase: EUseCase.EDIT,
    setShowModal,
  });
  const { options } = useFetchAplicationStaff(appData.token);

  const showRequestProcess = Boolean(showRequestProcessModal && savePositions);

  const showRequestStatusModal = Boolean(
    showPendingReqModal && savePositions?.requestNumber,
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
      loading={loadingSendData}
      onCloseRequestStatus={handleCloseRequestStatus}
      onClosePendingReqModal={handleClosePendingReqModal}
      onButtonClick={onSubmit}
      onReset={handleReset}
      setSelectedToggle={setSelectedToggle ?? []}
      smallScreen={smallScreen}
      roles={roles}
      options={options as IOptionInitialiceEntry[]}
      showGeneralInformation={showGeneralInformation}
      showRolesForm={showRolesForm}
      showRequestProcess={showRequestProcess}
      showRequestStatusModal={showRequestStatusModal}
      onCloseProcess={handleCloseProcess}
    />
  );
};

export { EditPositions };
