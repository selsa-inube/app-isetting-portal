import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { useDeleteDetailsAssignments } from "@hooks/assignments/useDeleteDetailsAssignments";
import { useSaveAssignments } from "@hooks/assignments/saveAssignments/useSaveAssignments";
import { DeleteRecord } from "@design/feedback/deleteRecord";
import { RequestProcess } from "@design/feedback/requestProcess";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { EUseCase } from "@enum/useCase";
import { EComponentAppearance } from "@enum/appearances";
import { portalId } from "@config/portalId";
import { deleteDetails } from "@config/assignments/details/deleteDetails";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { IDelete } from "@ptypes/positions/actions/IDelete";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";

const DeleteDetails = (props: IDelete) => {
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
  } = useDeleteDetailsAssignments({data, appData});

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
  }
  );

  const showRequestProcess =  showRequestProcessModal && saveAssignments

  const showRequestStatusModal = showPendingRequestModal && saveAssignments?.requestNumber

  return (
    <>
      <DeleteRecord
        messageDelete={deleteDetails}
        showModal={showModal}
        onToggleModal={handleToggleModal}
        onClick={handleClick}
        loading={loadingSendData}
      />
      { showRequestProcess && (
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

      { showRequestStatusModal && (
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

export { DeleteDetails };
