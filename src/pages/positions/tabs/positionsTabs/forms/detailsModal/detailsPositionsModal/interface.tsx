import { DetailsPosition } from "@config/positions/details";
import { IDetailsPositionsModalUI } from "@ptypes/positions/details/IDetailsPositionsModalUI";
import { LabelsInfo } from "./labelsInfo";
import { TableView } from "./tableView";
import { ModalWrapper } from "@design/modals/modalWrapper";
import { BorderStack } from "@design/modals/borderStack";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import RequestTitleSection from "@pages/positions/tabs/requestsInProgressTab/tools/details/requestsInProcess/requestTitleSection";

const DetailsPositionsModalUI = (props: IDetailsPositionsModalUI) => {
  const {
    onClose,
    labels,
    infoData,
    hasLabels,
    dataTable,
    isMobile,
    shouldRenderTableView,
  } = props;

  return (
    <ModalWrapper
      portalId="portal"
      isMobile={false}
      labelActionButton={DetailsPosition.detailsPositionsInfoText}
      labelCloseButton={DetailsPosition.detailsPositionsInfoText}
      labelCloseModal={DetailsPosition.detailsPositionsInfoText}
      title={DetailsPosition.detailsPositions}
      onCloseModal={onClose}
      width={isMobile ? "335px" : "700px"}
      height={isMobile ? "auto" : "100%"}
    >
      <BorderStack
        direction="column"
        background={inube.palette.neutral.N0}
        borderRadius={basic.spacing.s100}
        border={inube.palette.neutral.N40}
        boxSizing="border-box"
        width="100%"
        height="100%"
        gap={basic.spacing.s200}
        padding={isMobile ? basic.spacing.s150 : basic.spacing.s200}
      >
        <RequestTitleSection requestType={DetailsPosition.detailsPositions} />
        <LabelsInfo labels={labels} infoData={infoData} hasLabels={hasLabels} />
        {shouldRenderTableView && <TableView dataTable={dataTable!} />}
      </BorderStack>
    </ModalWrapper>
  );
};

export { DetailsPositionsModalUI };
