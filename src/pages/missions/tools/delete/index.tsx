import { useContext } from "react";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";
import { UseSavePositions } from "@hooks/positions/useSavePositions";
import { DeleteRecord } from "@design/feedback/deleteRecord";
import { deleteRequestInProgress } from "@config/positionsTabs/generics/deleteRequestInProgress";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { UseDeletePositions } from "@hooks/positions/useDeletePositions";
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
  } = UseDeletePositions({data, appData});

  const {
    savePositions,
    requestSteps,
    showPendingReqModal,
    loading,
    handleClosePendingReqModal,
    handleCloseRequestStatus,
  } = UseSavePositions(
    appData.businessUnit.publicCode,
    appData.user.userAccount,
    showRequestProcessModal,
    saveData as ISaveDataRequest,
    setShowRequestProcessModal,
    setShowModal
  );

  return (
    <>
      <DeleteRecord
        messageDelete={deleteRequestInProgress}
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onClick={handleClick}
        loading={loading}
      />
      {showRequestProcessModal && savePositions && (
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

      {showPendingReqModal && savePositions?.requestNumber && (
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
