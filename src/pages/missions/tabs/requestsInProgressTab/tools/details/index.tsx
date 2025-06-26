import { DetailsUI } from "./interface";
import { IDetails } from "@ptypes/requestsInProgress/IDetails";
import { useDetailsMission } from "@hooks/missions/useDetailsMission";
import { useDetailsRequestInProgress } from "@hooks/missions/useDetailsRequestInProgress";

const Details = (props: IDetails) => {
  const { data, titleMoreDetails } = props;

  const { showModal, screenTablet, normalizeData, handleToggleModal } =
    useDetailsRequestInProgress({ data });

  const {
    normalizeData: normalizeDataMoreDetails,
    isMobile,
    title,
    labelsOfRequestDetails,
    showModal: showMoreDetailsModal,
    handleTabChange,
    handleToggleModal: onToggleMoreDetailsModal,
  } = useDetailsMission({
    data: normalizeData,
    showModalReq: showModal,
  });


  return (
    <DetailsUI
      data={normalizeData}
      showModal={showModal}
      onToggleModal={handleToggleModal}
      showMoreDetailsModal={showMoreDetailsModal}
      isMobile={isMobile}
      screenTablet={screenTablet}
      abbreviatedName={data.configurationRequestData.abbreviatedName ?? ""}
      onTabChange={handleTabChange}
      normalizeDataMoreDetails={normalizeDataMoreDetails}
      labelsOfRequestDetails={labelsOfRequestDetails}
      title={title}
      titleMoreDetails={titleMoreDetails}
      handleMoreDetails={onToggleMoreDetailsModal}    
 />
  );
};

export { Details };
