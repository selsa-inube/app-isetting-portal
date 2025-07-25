import { useDetailsRequest } from "@hooks/assignments/UseDetailsRequest";
import { useDetailsRequestInProgress } from "@hooks/assignments/useDetailsRequestInProgress";
import { IDetails } from "@ptypes/assignments/request/IDetails";
import { IEntry } from "@ptypes/design/table/IEntry";
import { DetailsUI } from "./interface";

const Details = (props: IDetails) => {
  const { data } = props;

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
    smallScreen,
    pageLength,
    columnWidths,
  } = useDetailsRequest({
    data: normalizeData as IEntry,
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
      handleMoreDetails={onToggleMoreDetailsModal}
      smallScreen={smallScreen}
      pageLength={pageLength}
      columnWidths={columnWidths}
    />
  );
};

export { Details };
