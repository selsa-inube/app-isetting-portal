import { useDetailsRequestInProgress } from "@hooks/positions/useDetailsRequestInProgress";
import { labelsOptions } from "@config/requestsInProgressTab/details/labelsOptions";
import { IDetails } from "@ptypes/requestsInProgress/IDetails";
import { DetailsRequestInProcess } from "./detailsRequestInProcess";

const Details = (props: IDetails) => {
  const { data } = props;
  const {
    showModal,
    handleToggleModal,
    normalizeData,
    showMoreMission,
    onToggleMoreDetailsModal,
    dataTable,
    isMobile,
  } = useDetailsRequestInProgress(data);
  return (
    <DetailsRequestInProcess
      data={normalizeData}
      showModal={showModal}
      onToggleModal={handleToggleModal}
      showMoreMission={showMoreMission}
      isMobile={isMobile}
      onToggleMoreDetailsModal={onToggleMoreDetailsModal}
      labels={labelsOptions}
      infoData={data}
      dataTable={dataTable ?? []}
    />
  );
};

export { Details };
