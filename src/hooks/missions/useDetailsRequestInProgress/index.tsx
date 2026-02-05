import { useEffect, useState } from "react";
import { useMediaQuery } from "@inubekit/inubekit";

import { eventBus } from "@events/eventBus";
import { formatDateTable } from "@utils/date/formatDateTable";
import { IEntry } from "@ptypes/design/table/IEntry";
import { IUseDetailsRequestInProgress } from "@ptypes/missions/requestTab/IUseDetailsRequest";
import { mediaQueryMobile, mediaQueryTablet } from "@config/environment";
import { EModalState } from "@enum/modalState";
import { detailsRequestInProgressModal } from "@config/requestsInProgressTab/details/detailsRequestInProgressModal";
import { detailsRequestTabsConfig } from "@config/detailsRequestTabsConfig";
import { IDetailsRequestTabsConfig } from "@ptypes/requestsInProgress/IDetailsRequestTabsConfig";

const useDetailsRequestInProgress = (props: IUseDetailsRequestInProgress) => {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);
  const [isSelected, setIsSelected] = useState<string>();

  const [showMoreDetailsModal, setShowMoreDetailsModal] =
    useState<boolean>(false);

  const screenTablet = useMediaQuery(mediaQueryTablet);
  const isMobile = useMediaQuery(mediaQueryMobile);

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
  console.log(data);
  const normalizeDetails = {
    id: data.settingRequestId,
    missionName: data.configurationRequestData.missionName,
    descriptionUse: data.configurationRequestData.descriptionUse,
  };

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
      }),
    ),
  };

  const onMoreDetails = () => {
    setShowMoreDetailsModal(!showMoreDetailsModal);
  };

  useEffect(() => {
    eventBus.emit(EModalState.SECOND_MODAL_STATE, showModal);
  }, [showModal]);

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
    showModal,
    screenTablet,
    isMobile,
    showTrazabilityData,
    isSelected,
    filteredRequestTabs,
    showErrorData,
    defaultSelectedTab,
    withErrorRequest,
    title,
    showMoreDetailsModal,

    normalizeDetails,
    onMoreDetails,
    handleTabRequestChange,
    handleToggleModal,
    normalizeData,
  };
};

export { useDetailsRequestInProgress };
