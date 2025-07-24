import { useContext } from "react";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";
import { useSavePositions } from "@hooks/positions/useSavePositions";
import { DeleteRecord } from "@design/feedback/deleteRecord";
import { deleteRequestInProgress } from "@config/positionsTabs/generics/deleteRequestInProgress";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { useDeletePositions } from "@hooks/positions/useDeletePositions";
import { RequestProcess } from "@design/feedback/requestProcess";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { DecisionModalLabel } from "@config/positions/decisionModalText";
import { IDelete } from "@ptypes/positions/actions/IDelete";

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
  } = useDeletePositions({data, appData});

  const {
    savePositions,
    requestSteps,
    showPendingReqModal,
    loading,
    handleClosePendingReqModal,
    handleCloseRequestStatus,
  } = useSavePositions({
    bussinesUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal
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
        loading={loading}
      />
      {showRequestProcess && (
        <RequestProcess
          portalId={DecisionModalLabel.portalId}
          saveData={savePositions}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={handleCloseRequestStatus}
          onCloseProcess={() => {}}
        />
      )}

      {showReuestStatus && (
        <RequestStatusModal
          portalId="portal"
          title={requestStatusMessage(savePositions.responsible).title}
          description={
            requestStatusMessage(savePositions.responsible).description
          }
          requestNumber={savePositions.requestNumber}
          onClick={handleClosePendingReqModal}
          onCloseModal={handleClosePendingReqModal}
          loading={false}
          actionText={
            requestStatusMessage(savePositions.responsible).actionText
          }
          appearance={ComponentAppearance.PRIMARY}
        />
      )}
    </>
  );
};

export { Delete };
