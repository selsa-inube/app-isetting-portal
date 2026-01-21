import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { useSaveAssignments } from "@hooks/assignments/saveAssignments/useSaveAssignments";
import { useDeleteAssignments } from "@hooks/assignments/useDeleteAssignments";
import { DeleteRecord } from "@design/feedback/deleteRecord";
import { RequestProcess } from "@design/feedback/requestProcess";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { EUseCase } from "@enum/useCase";
import { EComponentAppearance } from "@enum/appearances";
import { portalId } from "@config/portalId";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { deleteAssignments } from "@config/assignments/generic/deleteAssignments";
import { requestStatusMessage } from "@config/assignments/generic/requestStatusMessage";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { IDelete } from "@ptypes/assignments/IDelete";

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
  } = useDeleteAssignments({ data, appData });

  const {
    saveAssignments,
    requestSteps,
    showPendingRequestModal,
    loadingSendData,
    handleClosePendingRequestModal,
    handleCloseRequestStatus,
  } = useSaveAssignments({
    useCase: EUseCase.DELETE,
    businessUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal,
    setEntryDeleted,
    token: appData.token,
  });

  const showRequestProcess = showRequestProcessModal && saveAssignments;

  const showRequestStatusModal =
    showPendingRequestModal && saveAssignments?.requestNumber;

  return (
    <>
      <DeleteRecord
        messageDelete={deleteAssignments}
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onClick={handleClick}
        loading={loadingSendData}
        withText={false}
      />
      {showRequestProcess && (
        <RequestProcess
          portalId={portalId}
          saveData={saveAssignments}
          descriptionRequestProcess={requestProcessMessage}
          descriptionRequestStatus={requestStatusMessage}
          requestProcessSteps={requestSteps}
          appearance={EComponentAppearance.SUCCESS}
          onCloseRequestStatus={handleCloseRequestStatus}
          onCloseProcess={() => {}}
        />
      )}

      {showRequestStatusModal && (
        <RequestStatusModal
          portalId={portalId}
          title={requestStatusMessage(saveAssignments.staffName).title}
          description={
            requestStatusMessage(saveAssignments.staffName).description
          }
          requestNumber={saveAssignments.requestNumber}
          onClick={handleClosePendingRequestModal}
          onCloseModal={handleClosePendingRequestModal}
          loading={false}
          actionText={
            requestStatusMessage(saveAssignments.staffName).actionText
          }
          appearance={EComponentAppearance.PRIMARY}
        />
      )}
    </>
  );
};

export { Delete };
