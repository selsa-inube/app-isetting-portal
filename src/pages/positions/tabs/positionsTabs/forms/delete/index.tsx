import { useContext } from "react";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";
import { useSavePositions } from "@hooks/positions/useSavePositions";
import { DeleteRecord } from "@design/feedback/deleteRecord";
import { deleteRequestInProgress } from "@config/positionsTabs/generics/deleteRequestInProgress";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { EComponentAppearance } from "@enum/appearances";
import { useDeletePositions } from "@hooks/positions/useDeletePositions";
import { RequestProcess } from "@design/feedback/requestProcess";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { DecisionModalLabel } from "@config/positions/decisionModalText";
import { IDelete } from "@ptypes/positions/actions/IDelete";
import { EUseCase } from "@enum/useCase";

const Delete = (props: IDelete) => {
  const { data, setEntryDeleted } = props;
  const { appData } = useContext(AuthAndData);

  const {
    showModal,
    saveData,
    showRequestProcessModal,
    handleToggleModal,
    handleClick,
    setShowRequestProcessModal,
    setShowModal,
  } = useDeletePositions({ data, appData });

  const {
    savePositions,
    requestSteps,
    showPendingReqModal,
    loadingSendData,
    handleCloseProcess,
    handleClosePendingReqModal,
    handleCloseRequestStatus,
  } = useSavePositions({
    businessUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    token: appData.token,
    setSendData: setShowRequestProcessModal,
    setShowModal,
    setEntryDeleted,
    useCase: EUseCase.DELETE,
  });

  const showRequestProcess = showRequestProcessModal && savePositions;

  const showReuestStatus = showPendingReqModal && savePositions?.requestNumber;

  return (
    <>
      <DeleteRecord
        messageDelete={deleteRequestInProgress}
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onClick={handleClick}
        loading={loadingSendData}
      />
      {showRequestProcess && (
        <RequestProcess
          portalId={DecisionModalLabel.portalId}
          saveData={savePositions}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={EComponentAppearance.SUCCESS}
          onCloseRequestStatus={handleCloseRequestStatus}
          onCloseProcess={handleCloseProcess}
        />
      )}

      {showReuestStatus && (
        <RequestStatusModal
          portalId="portal"
          title={requestStatusMessage(savePositions.staffName).title}
          description={
            requestStatusMessage(savePositions.staffName).description
          }
          requestNumber={savePositions.requestNumber}
          onClick={handleClosePendingReqModal}
          onCloseModal={handleClosePendingReqModal}
          loading={false}
          actionText={requestStatusMessage(savePositions.staffName).actionText}
          appearance={EComponentAppearance.PRIMARY}
        />
      )}
    </>
  );
};

export { Delete };
