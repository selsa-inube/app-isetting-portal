import { useState, useEffect, useRef } from "react";
import localforage from "localforage";

import { eventBus } from "@events/eventBus";
``;
import { EErrorState } from "@enum/errorState";
import { IErrorMessage } from "@ptypes/errors/IErrorMessage";

const useErrorManagement = () => {
  const [errorModal, setErrorModal] = useState(false);
  const [errorData, setErrorData] = useState<IErrorMessage>();
  const pendingCount = useRef(0);

  useEffect(() => {
    const handleToggleErrorModal = async (value: boolean) => {
      if (!value) {
        setErrorModal(false);
        setErrorData({} as IErrorMessage);
        pendingCount.current = 0;
        await localforage.removeItem("lastError");
        return;
      }

      const storedError = (await localforage.getItem(
        "lastError"
      )) as IErrorMessage;
      if (storedError.method === "get") {
        if (storedError?.code === 0) {
          pendingCount.current += 1;

          if (pendingCount.current < 3) {
            return;
          }
        }
        setErrorData(storedError);
        setErrorModal(true);
      } else {
        setErrorData(storedError);
        setErrorModal(true);
      }
    };

    eventBus.on(EErrorState.ERROR_MODAL_STATE, handleToggleErrorModal);
    return () => {
      eventBus.off(EErrorState.ERROR_MODAL_STATE, handleToggleErrorModal);
    };
  }, []);

  return {
    errorModal,
    errorData,
    closeErrorModal: () => eventBus.emit(EErrorState.ERROR_MODAL_STATE, false),
  };
};

export { useErrorManagement };
