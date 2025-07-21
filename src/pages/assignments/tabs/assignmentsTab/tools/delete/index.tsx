import { useContext } from "react";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { AuthAndData } from "@context/authAndDataProvider";
import { DeleteRecord } from "@design/feedback/deleteRecord";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { RequestProcess } from "@design/feedback/requestProcess";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { UseDeleteAssignments } from "@hooks/assignments/useDeleteAssignments";
import { UseSaveAssignments } from "@hooks/assignments/saveAssigments/useSaveAssignments";
import { EUseCase } from "@enum/useCase";
import { portalId } from "@config/portalId";
import { EComponentAppearance } from "@enum/appearances";
import { deleteAssignments } from "@config/assignments/generic/deleteAssignments";
import { requestStatusMessage } from "@config/assignments/generic/requestStatusMessage";
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
  } = UseDeleteAssignments({ data, appData });

  const {
    saveAssignments,
    requestSteps,
    showPendingReqModal,
    loadingSendData,
    handleClosePendingReqModal,
    handleCloseRequestStatus,
  } = UseSaveAssignments({
    useCase: EUseCase.DELETE,
    bussinesUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal,
    setEntryDeleted,
  });

  const showRequestProcess = showRequestProcessModal && saveAssignments;

  const showRequestStatusModal =
    showPendingReqModal && saveAssignments?.requestNumber;

  return (
    <>
      <DeleteRecord
        messageDelete={deleteAssignments}
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onClick={handleClick}
        loading={loadingSendData}
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
          onClick={handleClosePendingReqModal}
          onCloseModal={handleClosePendingReqModal}
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
