import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { useSaveMission } from "@hooks/missions/useSaveMission";
import { useDeleteMission } from "@hooks/missions/useDeleteMission";
import { DeleteRecord } from "@design/feedback/deleteRecord";
import { RequestProcess } from "@design/feedback/requestProcess";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { EUseCase } from "@enum/useCase";
import { EComponentAppearance } from "@enum/appearances";
import { portalId } from "@config/portalId";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { deleteMission } from "@config/missions/missionTab/generic/deleteMission";
import { IDelete } from "@ptypes/positions/actions/IDelete";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";

const Delete = (props: IDelete) => {
  const { data } = props;
  const { appData } = useContext(AuthAndData);

  const {
    showModal,
    saveData,
    showRequestProcessModal,
    handleToggleModal,
    handleClick,
    setShowRequestProcessModal,
    setShowModal,
  } = useDeleteMission({ data, appData });

  const {
    saveMission,
    requestSteps,
    showPendingReqModal,
    loadingSendData,
    handleCloseProcess,
    handleClosePendingReqModal,
    handleCloseRequestStatus,
  } = useSaveMission({
    useCase: EUseCase.DELETE,
    businessUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal
  }
  );

  const showRequestProcess = showRequestProcessModal && saveMission

  const showRequestStatusModal = showPendingReqModal && saveMission?.requestNumber

  return (
    <>
      <DeleteRecord
        messageDelete={deleteMission}
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onClick={handleClick}
        loading={loadingSendData}
      />
      {showRequestProcess && (
        <RequestProcess
          portalId={portalId}
          saveData={saveMission}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={EComponentAppearance.SUCCESS}
          onCloseRequestStatus={handleCloseRequestStatus}
          onCloseProcess={handleCloseProcess}
        />
      )}

      {showRequestStatusModal && (
        <RequestStatusModal
          portalId={portalId}
          title={requestStatusMessage(saveMission.staffName).title}
          description={
            requestStatusMessage(saveMission.staffName).description
          }
          requestNumber={saveMission.requestNumber}
          onClick={handleClosePendingReqModal}
          onCloseModal={handleClosePendingReqModal}
          loading={false}
          actionText={
            requestStatusMessage(saveMission.staffName).actionText
          }
          appearance={EComponentAppearance.PRIMARY}
        />
      )}
    </>
  );
};

export { Delete };
