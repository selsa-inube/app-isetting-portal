import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";
import { useSaveMission } from "@hooks/missions/useSaveMission";
import { EUseCase } from "@enum/useCase";
import { UseEditMission } from "@hooks/missions/useEditMission";
import { ISaveDataResponse } from "@ptypes/saveData/ISaveDataResponse";
import { editMissionTabsConfig } from "@config/missions/missionTab/edit/tabs";
import { EditMissionUI } from "./interface";

const EditMission = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const { appData } = useContext(AuthAndData);

  const {
    formValues,
    generalInformationRef,
    isSelected,
    saveData,
    showRequestProcessModal,
    smallScreen,
    showGeneralInfo,
    showEditedModal,
    showGoBackModal,
    handleToggleEditedModal,
    handleEditedModal,
    handleCloseGoBackModal,
    handleGoBack,
    handleReset,
    setIsCurrentFormValid,
    handleTabChange,
    setShowModal,
    setShowRequestProcessModal,
  } = UseEditMission({ data, appData });

  const {
    saveMission,
    requestSteps,
    loadingSendData,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
    handleCloseProcess,
    showPendingReqModal,
  } = useSaveMission({
    useCase: EUseCase.EDIT,
    bussinesUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal,
  });

  const showRequestProcess = Boolean(showRequestProcessModal && saveMission);

  const showRequestStatus = Boolean(
    showPendingReqModal && saveMission?.requestNumber
  );

  return (
    <EditMissionUI
      editMissionTabsConfig={editMissionTabsConfig}
      isSelected={isSelected}
      onTabChange={handleTabChange}
      generalInformationRef={generalInformationRef}
      initialValues={formValues}
      setIsCurrentFormValid={setIsCurrentFormValid}
      saveMission={saveMission as ISaveDataResponse}
      requestSteps={requestSteps}
      loading={loadingSendData}
      onCloseRequestStatus={handleCloseRequestStatus}
      onClosePendingReqModal={handleClosePendingReqModal}
      onReset={handleReset}
      smallScreen={smallScreen}
      showRequestProcess={showRequestProcess}
      showGeneralInfo={showGeneralInfo}
      showRequestStatus={showRequestStatus}
      showEditedModal={showEditedModal}
      showGoBackModal={showGoBackModal}
      onToggleEditedModal={handleToggleEditedModal             }
      onEditedModal={handleEditedModal}
      onCloseGoBackModal={handleCloseGoBackModal}
      onGoBack={handleGoBack}
      onCloseProcess={handleCloseProcess}
    />
  );
};

export { EditMission };
