import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

import { EModalState } from "@enum/modalState";
import { eventBus } from "@events/eventBus";
import { formatDateTable } from "@utils/date/formatDateTable";
import { mediaQueryMobile, mediaQueryTabletMain } from "@config/environment";
import { IEntry } from "@ptypes/design/table/IEntry";
import { IUseDetailsRequestInProgress } from "@ptypes/assignments/request/IUseDetailsRequest";
import { detailsRequestTabsConfig } from "@config/detailsRequestTabsConfig";
import { IDetailsRequestTabsConfig } from "@ptypes/requestsInProgress/IDetailsRequestTabsConfig";

const useDetailsRequestInProgress = (props: IUseDetailsRequestInProgress) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);
  const [isSelected, setIsSelected] = useState<string>();

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  const showTrazabilityData =
    isSelected === detailsRequestTabsConfig.trazabilityData.id;

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
      }),
    ),
  };

  useEffect(() => {
    if (defaultSelectedTab === detailsRequestTabsConfig.errorData.id) {
      setIsSelected(detailsRequestTabsConfig.errorData.id);
    } else {
      setIsSelected(detailsRequestTabsConfig.trazabilityData.id);
    }
  }, []);
  const showErrorData = isSelected === detailsRequestTabsConfig.errorData.id;

  useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

  const screenTablet = useMediaQuery(mediaQueryTabletMain);
  const isMobile = useMediaQuery(mediaQueryMobile);

  const handleTabRequestChange = (tabId: string) => {
    setIsSelected(tabId);
  };

  return {
    showModal,
    screenTablet,
    isMobile,
    handleToggleModal,
    normalizeData,
    showTrazabilityData,
    showErrorData,
    isSelected,
    defaultSelectedTab,
    handleTabRequestChange,
    filteredRequestTabs,
  };
};

export { useDetailsRequestInProgress };
