import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

import { eventBus } from "@events/eventBus";
import { formatDateTable } from "@utils/date/formatDateTable";
import { IEntry } from "@ptypes/design/table/IEntry";
import { IUseDetailsRequestInProgress } from "@ptypes/missions/requestTab/IUseDetailsRequest";
import { enviroment } from "@config/environment";
import { EModalState } from "@enum/modalState";

const useDetailsRequestInProgress = (props: IUseDetailsRequestInProgress) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const normalizeData = {
    ...data,
    id: data.id,
    request: data.useCaseName,
    responsable: "",
    dateExecution: data.requestDate,
    status: data.requestStatus,
    traceability: data.configurationRequestsTraceability.map(
      (traceability: IEntry) => ({
        dateExecution: formatDateTable(new Date(traceability.executionDate)),
        actionExecuted: traceability.actionExecuted,
        userWhoExecuted: traceability.userWhoExecutedAction,
        description: traceability.description,
      })
    ),
  };

  useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

  const screenTablet = useMediaQuery(enviroment.IS_MOBILE_1200);
  const isMobile = useMediaQuery(enviroment.IS_MOBILE_743);

  return {
    showModal,
    screenTablet,
    isMobile,
    handleToggleModal,
    normalizeData,
  };
};

export { useDetailsRequestInProgress };
