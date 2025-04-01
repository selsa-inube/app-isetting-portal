import { useContext } from "react";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { RequestProcessModal } from "@design/modals/requestProcessModal";
import { DecisionModal } from "@design/modals/decisionModal";

import { AuthAndData } from "@context/authAndDataProvider";
import { UseSavePositions } from "@hooks/positions/useSavePositions";
import { DeleteRecord } from "@design/feedback/deleteRecord";
import { deleteRequestInProgress } from "@config/positionsTabs/generics/deleteRequestInProgress";
import { requestStatusMessage } from "@config/positionsTabs/generics/requestStatusMessage";
import { requestProcessMessage } from "@config/positionsTabs/requestProcessMessage";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { requestPendingModal } from "@config/positionsTabs/generics/requestPendingModal";
import { UseDeletePositions } from "@hooks/positions/useDeletePositions";
import { IEntry } from "@ptypes/table/IEntry";

interface IDelete {
  data: IEntry;
  setEntryDeleted: (id: string | number) => void;
}

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
  } = UseDeletePositions(data, appData);

  const {
    savePositions,
    requestSteps,
    showPendingReqModal,
    loading,
    handleCloseRequestStatus,
    handleClosePendingReqModal,
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
        <RequestProcessModal
          portalId="portal"
          saveData={savePositions}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          loading={loading}
          requestProcessSteps={requestSteps}
          appearance={ComponentAppearance.SUCCESS}
          onCloseRequestStatus={handleCloseRequestStatus}
        />
      )}
      {showPendingReqModal && savePositions?.requestNumber && (
        <DecisionModal
          portalId="portal"
          title={requestPendingModal(savePositions?.requestNumber).title}
          description={
            requestPendingModal(savePositions.requestNumber).description
          }
          actionText={
            requestPendingModal(savePositions.requestNumber).actionText
          }
          onCloseModal={handleClosePendingReqModal}
          onClick={handleClosePendingReqModal}
          withCancelButton={false}
        />
      )}
    </>
  );
};

export { Delete };
