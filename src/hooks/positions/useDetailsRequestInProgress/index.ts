import { useState } from "react";
import { formatDateTable } from "@utils/date/formatDateTable";
import { IEntry } from "@ptypes/table/IEntry";

const UseDetailsRequestInProgress = (data: IEntry) => {
  const [showModal, setShowModal] = useState(false);
  const [showMoreMission, setShowMoreMission] = useState(false);

  const onToggleMoreDetailsModal = () => {
    setShowMoreMission(!showMoreMission);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const normalizeData = {
    ...data,
    request: data.useCaseName,
    responsable: "",
    status: data.requestStatus,
    configurationRequestData: data.configurationRequestData,
    traceability: data.configurationRequestsTraceability.map(
      (traceability: IEntry) => ({
        dateExecution: formatDateTable(new Date(traceability.executionDate)),
        actionExecuted: traceability.actionExecuted,
        userWhoExecuted: traceability.userWhoExecutedAction,
        description: traceability.description,
      })
    ),
  };
  const dataTable = Array.isArray(data?.configurationRequestData.MissionByRole)
    ? data.configurationRequestData.MissionByRole.map(
        (item: { roleName: string }) => ({
          Roles: item.roleName,
        })
      )
    : [];

  return {
    showMoreMission,
    showModal,
    handleToggleModal,
    normalizeData,
    dataTable,
    onToggleMoreDetailsModal,
  };
};

export { UseDetailsRequestInProgress };
