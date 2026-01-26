import { cancelRequestInProgressModal } from "@config/positionsTabs/requestProcessMessage/cancelRequestInProgressModal";
import { AuthAndData } from "@context/authAndDataProvider";
import { CancelRecord } from "@design/feedback/cancelRecord";
import { useCancelRequestInProgress } from "@hooks/positions/useCancelRequestInProgress";
import { IEntry } from "@ptypes/table/IEntry";
import { useContext } from "react";

interface ICancel {
  data: IEntry;
  setEntryCanceled: (id: string | number) => void;
}

const Cancel = (props: ICancel) => {
  const { data, setEntryCanceled } = props;
  const { appData } = useContext(AuthAndData);

  const { showModal, loading, handleToggleModal, handleClick } =
    useCancelRequestInProgress(
      appData.businessUnit.publicCode,
      data,
      appData.user.userAccount,
      setEntryCanceled,
      appData.token,
    );

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
