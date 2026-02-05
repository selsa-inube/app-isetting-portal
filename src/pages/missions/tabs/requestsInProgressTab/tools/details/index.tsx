import { DetailsUI } from "./interface";
import { IDetails } from "@ptypes/requestsInProgress/IDetails";

import { useDetailsRequestInProgress } from "@hooks/missions/useDetailsRequestInProgress";
import { labelsOfRequest } from "@config/requestsInProgressTab/details/labelsOfRequest";

const Details = (props: IDetails) => {
  const { data } = props;
  const {
    showModal,
    screenTablet,
    normalizeData,
    filteredRequestTabs,
    showTrazabilityData,
    showErrorData,
    title,
    isMobile,
    isSelected: isSelectedRequest,
    defaultSelectedTab: defaultSelectedRequestTab,
    showMoreDetailsModal,
    normalizeDetails,
    onMoreDetails,
    handleToggleModal,
    handleTabRequestChange,
  } = useDetailsRequestInProgress({
    data,
  });

  return (
    <DetailsUI
      data={normalizeData}
      showModal={showModal}
      onToggleModal={handleToggleModal}
      isMobile={isMobile}
      screenTablet={screenTablet}
      title={title}
      labelsOfRequest={labelsOfRequest}
      filteredTabs={filteredRequestTabs}
      showTrazabilityData={showTrazabilityData}
      showErrorData={showErrorData}
      onTabRequestChange={handleTabRequestChange}
      isSelectedRequest={isSelectedRequest ?? defaultSelectedRequestTab ?? ""}
      showMoreDetailsModal={showMoreDetailsModal}
      onMoreDetails={onMoreDetails}
      normalizeDetails={normalizeDetails}
    />
  );
};

export { Details };
