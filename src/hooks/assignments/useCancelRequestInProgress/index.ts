import { useEffect, useState } from "react";
import { IFlagAppearance, useFlag } from "@inubekit/inubekit";

import { cancelRequestInProgress } from "@services/requestInProgress/cancelRequestInProgress";
import { EModalState } from "@enum/modalState";
import { eventBus } from "@events/eventBus";
import { cancelLabels } from "@config/assignments/requestTab/cancelLabels";
import { cancelRequestInProgMessage } from "@config/request/cancelRequestInProgMessage";
import { ICancelRequestInProgress } from "@ptypes/requestsInProgress/ICancelReqInProcRequest";
import { IUseCancelRequestInProgress } from "@ptypes/hooks/IUseCancelRequestInProgress";

const useCancelRequestInProgress = (props: IUseCancelRequestInProgress) => {
  const { businessUnit, data, userAccount, setEntryCanceled, token } = props;
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { addFlag } = useFlag();

  const fetchCancelRequestData = async (data: ICancelRequestInProgress) => {
    setLoading(true);
    try {
      await cancelRequestInProgress(businessUnit, data, token);
      setEntryCanceled(data.settingRequestId);
      addFlag({
        title: cancelRequestInProgMessage.success.title,
        description: cancelRequestInProgMessage.success.description,
        appearance: cancelRequestInProgMessage.success
          .appearance as IFlagAppearance,
        duration: cancelRequestInProgMessage.success.duration,
      });
    } catch (error) {
      console.info(error);
      setHasError(true);
      addFlag({
        title: cancelRequestInProgMessage.error.title,
        description: cancelRequestInProgMessage.error.description,
        appearance: cancelRequestInProgMessage.error
          .appearance as IFlagAppearance,
        duration: cancelRequestInProgMessage.error.duration,
      });
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  const handleClick = () => {
    fetchCancelRequestData({
      removalJustification: cancelLabels(userAccount).removalJustification,
      requestNumber: data.requestNumber,
      settingRequestId: data.settingRequestId,
    });
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

  return {
    showModal,
    loading,
    hasError,
    handleToggleModal,
    handleClick,
  };
};
export { useCancelRequestInProgress };
