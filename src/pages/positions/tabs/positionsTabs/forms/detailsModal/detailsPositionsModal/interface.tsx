import { InteractiveModal } from "@design/feedback/InteractiveModal";
import { DetailsPosition } from "@config/positions/details";
import { IDetailsPositionsModalUI } from "@ptypes/positions/details/IDetailsPositionsModalUI";
import { LabelsInfo } from "./labelsInfo";
import { TableView } from "./tableView";

const DetailsPositionsModalUI = (props: IDetailsPositionsModalUI) => {
  const { onClose, smallScreen, labels, infoData, hasLabels, dataTable } =
    props;

  return (
    <InteractiveModal
      portalId={DetailsPosition.portalId}
      title={DetailsPosition.detailsPositions}
      closeModal={onClose}
      infoText={DetailsPosition.detailsPositionsInfoText}
      width={smallScreen ? "100%" : "600px"}
    >
      <LabelsInfo labels={labels} infoData={infoData} hasLabels={hasLabels} />
      {dataTable && <TableView dataTable={dataTable} />}
    </InteractiveModal>
  );
};

export { DetailsPositionsModalUI };
