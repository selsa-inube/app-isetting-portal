import { useContext } from "react";
import { CancelRecord } from "@design/feedback/cancelRecord";
import { AuthAndData } from "@context/authAndDataProvider";
import { cancelRequestInProgressModal } from "@config/request/cancelRequestInProgressModal";
import { ICancel } from "@ptypes/missions/requestTab/ICancel";
import { useCancelRequestInProgress } from "@hooks/missions/useCancelRequestInProgress";

const Cancel = (props: ICancel) => {
  const { data, setEntryCanceled } = props;
  const { appData } = useContext(AuthAndData);

  const { showModal, loading, handleToggleModal, handleClick } =
    useCancelRequestInProgress({
      businessUnit: appData.businessUnit.publicCode,
      data,
      userAccount: appData.user.userAccount,
      setEntryCanceled,
    });

  return (
    <CancelRecord
      messageCancel={cancelRequestInProgressModal}
      showModal={showModal}
      onToggleModal={handleToggleModal}
      onClick={handleClick}
      loading={loading}
      status={data.requestStatus}
    />
  );
};

export { Cancel };
