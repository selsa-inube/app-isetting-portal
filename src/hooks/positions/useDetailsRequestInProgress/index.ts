import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";
import { formatDateTable } from "@utils/date/formatDateTable";
import { EModalState } from "@enum/modalState";
import { eventBus } from "@events/eventBus";
import { mediaQueryTabletMain } from "@config/environment";
import { IEntry } from "@ptypes/design/table/IEntry";
import { detailsRequestTabsConfig } from "@config/detailsRequestTabsConfig";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import { IDetailsRequestTabsConfig } from "@ptypes/requestsInProgress/IDetailsRequestTabsConfig";

const useDetailsRequestInProgress = (data: IEntry) => {
  const [showModal, setShowModal] = useState(false);
  const [isSelected, setIsSelected] = useState<string>();

  const [showMoreMission, setShowMoreMission] = useState(false);

  const onToggleMoreDetailsModal = () => {
    setShowMoreMission(!showMoreMission);
  };

  const showTrazabilityData =
    isSelected === detailsRequestTabsConfig.trazabilityData.id;

  const title = `${detailsRequestInProgressModal.labelRequest} ${data.useCaseName}`;
  const getFirstFilteredTab = (
    filteredTabsConfig: IDetailsRequestTabsConfig,
  ) => {
    const keys = Object.keys(filteredTabsConfig);
    if (keys.length > 0) {
      return filteredTabsConfig[keys[0] as keyof IDetailsRequestTabsConfig];
    }
    return undefined;
  };

  useEffect(() => {
    if (defaultSelectedTab === detailsRequestTabsConfig.errorData.id) {
      setIsSelected(detailsRequestTabsConfig.errorData.id);
    } else {
      setIsSelected(detailsRequestTabsConfig.trazabilityData.id);
    }
  }, []);
  const withErrorRequest = Object.values(data.settingRequestError).length > 0;
  const filteredRequestTabsConfig = Object.keys(
    detailsRequestTabsConfig,
  ).reduce((detail, key) => {
    const tab =
      detailsRequestTabsConfig[key as keyof IDetailsRequestTabsConfig];

    if (
      tab?.id === detailsRequestTabsConfig.errorData.id &&
      !withErrorRequest
    ) {
      return detail;
    }

    if (tab !== undefined) {
      detail[key as keyof IDetailsRequestTabsConfig] = tab;
    }
    return detail;
  }, {} as IDetailsRequestTabsConfig);
  const filteredRequestTabs = Object.values(filteredRequestTabsConfig);
  const defaultSelectedTab = getFirstFilteredTab(filteredRequestTabsConfig)?.id;

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
      }),
    ),
  };
  const dataTable = Array.isArray(data?.configurationRequestData.missionByRole)
    ? data.configurationRequestData.missionByRole.map(
        (item: { roleName: string }) => ({
          Roles: item.roleName,
        }),
      )
    : [];

  useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

  const isMobile = useMediaQuery(mediaQueryTabletMain);
  useEffect(() => {
    if (defaultSelectedTab === detailsRequestTabsConfig.errorData.id) {
      setIsSelected(detailsRequestTabsConfig.errorData.id);
    } else {
      setIsSelected(detailsRequestTabsConfig.trazabilityData.id);
    }
  }, []);
  const showErrorData = isSelected === detailsRequestTabsConfig.errorData.id;
  const handleTabRequestChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  return {
    showMoreMission,
    showModal,
    handleToggleModal,
    normalizeData,
    dataTable,
    isMobile,
    onToggleMoreDetailsModal,
    title,
    showTrazabilityData,
    showErrorData,
    isSelected,
    defaultSelectedTab,
    handleTabRequestChange,
    filteredRequestTabs,
  };
};

export { useDetailsRequestInProgress };
