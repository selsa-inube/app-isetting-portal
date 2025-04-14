import { useState } from "react";

import { formatDateTable } from "@utils/date/formatDateTable";
import { IEntry } from "@ptypes/table/IEntry";

const UseDetailsRequestInProgress = (data: IEntry) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const normalizeData = {
    ...data,
    request: data.useCaseName,
    responsable: "",
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
  return {
    showModal,
    handleToggleModal,
    normalizeData,
  };
};

export { UseDetailsRequestInProgress };
