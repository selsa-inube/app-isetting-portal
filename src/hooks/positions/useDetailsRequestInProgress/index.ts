import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { formatDateTable } from "@utils/date/formatDateTable";
import { EModalState } from "@enum/modalState";
import { eventBus } from "@events/eventBus";
import { enviroment } from "@config/environment";
import { IEntry } from "@ptypes/table/IEntry";

const useDetailsRequestInProgress = (data: IEntry) => {
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
  const dataTable = Array.isArray(data?.configurationRequestData.missionByRole)
    ? data.configurationRequestData.missionByRole.map(
        (item: { roleName: string }) => ({
          Roles: item.roleName,
        })
      )
    : [];

   useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

  const isMobile = useMediaQuery(enviroment.IS_MOBILE_970)

  return {
    showMoreMission,
    showModal,
    handleToggleModal,
    normalizeData,
    dataTable,
    isMobile,
    onToggleMoreDetailsModal,
  };
};

export { useDetailsRequestInProgress };
