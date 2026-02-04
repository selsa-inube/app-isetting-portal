import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { useSaveUsers } from "@hooks/users/tabs/userTab/addUser/saveUsers/useSaveUsers";
import { EUseCase } from "@enum/useCase";
import { ISaveDataRequest } from "@ptypes/saveData/ISaveDataRequest";
import { DeleteRecord } from "@design/feedback/deleteRecord";
import { RequestProcess } from "@design/feedback/requestProcess";
import { EComponentAppearance } from "@enum/appearances";
import { portalId } from "@config/portalId";
import { requestStatusMessage } from "@config/positions/requestStatusMessage";
import { RequestStatusModal } from "@design/modals/requestStatusModal";
import { useDeleteUser } from "@hooks/users/tabs/userTab/useDeleteUser";
import { deleteMission } from "@config/missions/missionTab/generic/deleteMission";
import { requestProcessMessage } from "@config/request/requestProcessMessage";
import { IDelete } from "@ptypes/positions/actions/IDelete";

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
  } = useDeleteUser({ data, appData });

  const {
    saveUsers,
    requestSteps,
    showPendingReqModal,
    loadingSendData,
    handleCloseProcess,
    handleClosePendingReqModal,
    handleCloseRequestStatus,
  } = useSaveUsers({
    useCase: EUseCase.DELETE,
    businessUnits: appData.businessUnit.publicCode,
    userAccount: appData.user.userAccount,
    sendData: showRequestProcessModal,
    data: saveData as ISaveDataRequest,
    setSendData: setShowRequestProcessModal,
    setShowModal,
    setEntryDeleted,
    token: appData.token,
    businessManagerCode: appData.businessManager.publicCode,
  });

  const showRequestProcess = showRequestProcessModal && saveUsers;

  const showRequestStatusModal =
    showPendingReqModal && saveUsers?.requestNumber;

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
          saveData={saveUsers}
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
          title={requestStatusMessage(saveUsers.staffName).title}
          description={requestStatusMessage(saveUsers.staffName).description}
          requestNumber={saveUsers.requestNumber}
          onClick={handleClosePendingReqModal}
          onCloseModal={handleClosePendingReqModal}
          loading={false}
          actionText={requestStatusMessage(saveUsers.staffName).actionText}
          appearance={EComponentAppearance.PRIMARY}
        />
      )}
    </>
  );
};

export { Delete };
