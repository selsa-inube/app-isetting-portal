import { useContext } from "react";
import { AuthAndData } from "@context/authAndDataProvider";
import { useCancelRequestInProgress } from "@hooks/assignments/useCancelRequestInProgress";
import { CancelRecord } from "@design/feedback/cancelRecord";
import { cancelRequestInProgressModal } from "@config/request/cancelRequestInProgressModal";
import { ICancel } from "@ptypes/assignments/request/ICancel";

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
